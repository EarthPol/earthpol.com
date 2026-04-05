<?php
// Enable error reporting during development (disable in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start PHP session to store the state and Minecraft link info.
session_start();

// Replace these with your actual Discord app credentials.
$clientID = '1204206372271427675';
$clientSecret = 'VEd5flyaBnDTKmHZ19AOHZDpcdodL8JO';

// This redirect URI must match the one configured in your Discord Developer Portal.
$redirectURI = 'https://earthpol.com/linking/link.php';

// INITIAL STAGE: The user is sent here from the Minecraft plugin.
// Expect parameters: uuid, mc_code, and mc_username.
if (!isset($_GET['state'])) {
    if (!isset($_GET['uuid']) || !isset($_GET['mc_code']) || !isset($_GET['mc_username'])) {
        die("Missing required parameters. (Expected: uuid, mc_code, and mc_username)");
    }

    // Store the Minecraft UUID, linking code, and username in the session.
    $_SESSION['minecraft_uuid'] = $_GET['uuid'];
    $_SESSION['minecraft_code'] = $_GET['mc_code'];
    $_SESSION['minecraft_username'] = $_GET['mc_username'];

    // Generate a random state parameter for OAuth to prevent CSRF.
    $state = bin2hex(random_bytes(16));
    $_SESSION['oauth_state'] = $state;

    // Optionally, set a cookie with the state (expires in 5 minutes).
    setcookie("oauth_state", $state, time() + 300, "/", "", true, true);

    // Build the Discord OAuth2 URL.
    $params = [
        'client_id'     => $clientID,
        'redirect_uri'  => $redirectURI,
        'response_type' => 'code',
        'scope'         => 'identify', // Add additional scopes if needed.
        'state'         => $state,
    ];
    $oauthURL = "https://discord.com/api/oauth2/authorize?" . http_build_query($params);

    // Redirect the user to Discord's OAuth2 authorization page.
    header("Location: " . $oauthURL);
    exit();
} else {
    // CALLBACK STAGE: The user is returning from Discord with 'code' and 'state'.

    // Verify that the returned state matches the stored state.
    if (!isset($_GET['state']) || $_GET['state'] !== $_SESSION['oauth_state']) {
        die("Invalid OAuth state. Please try again.");
    }

    // Exchange the Discord OAuth code for an access token.
    $code = $_GET['code'];
    $tokenURL = "https://discord.com/api/oauth2/token";
    $data = [
        "client_id"     => $clientID,
        "client_secret" => $clientSecret,
        "grant_type"    => "authorization_code",
        "code"          => $code,
        "redirect_uri"  => $redirectURI,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $tokenURL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
    $result = curl_exec($ch);
    curl_close($ch);

    $tokenData = json_decode($result, true);
    if (!isset($tokenData['access_token'])) {
        die("Failed to obtain access token from Discord.");
    }
    $accessToken = $tokenData['access_token'];

    // Use the access token to fetch Discord user information.
    $ch = curl_init("https://discord.com/api/users/@me");
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer " . $accessToken]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $userResult = curl_exec($ch);
    curl_close($ch);

    $userData = json_decode($userResult, true);
    if (!isset($userData['id'])) {
        die("Failed to retrieve Discord user information.");
    }

    // Extract the Discord user ID and the username.
    $discordID = $userData['id'];
    $discordUsername = $userData['username'];

    // Retrieve the Minecraft info from the session.
    $minecraftUUID = $_SESSION['minecraft_uuid'];
    $minecraftCode = $_SESSION['minecraft_code'];
    $minecraftUsername = $_SESSION['minecraft_username'];

    // --- DATABASE PART ---
    $dbHost = 'one.ip.to.rule.them.all.xbit.dev';
    $dbPort = '3306';
    $dbName = 's18_discord';
    $dbUser = 'u18_NzTvLk0yAC';
    $dbPass = 'L+sXUD^1RQ@T@V73Llf..McQ';

    try {
        $pdo = new PDO(
            "mysql:host=$dbHost;port=$dbPort;dbname=$dbName;charset=utf8mb4",
            $dbUser, $dbPass,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    } catch (PDOException $e) {
        die("Database connection failed: " . $e->getMessage());
    }

    // Verify the linking code.
    $stmt = $pdo->prepare(
        "SELECT * FROM discord_codes WHERE code = ? AND uuid = ? AND expiration > ?"
    );
    $stmt->execute([$minecraftCode, $minecraftUUID, time()]);
    if (!$stmt->fetch(PDO::FETCH_ASSOC)) {
        die("Invalid or expired linking code.");
    }

    // Delete the used code.
    $pdo->prepare(
        "DELETE FROM discord_codes WHERE code = ? AND uuid = ?"
    )->execute([$minecraftCode, $minecraftUUID]);

    // Perform the linking transaction.
    try {
        $pdo->beginTransaction();

        // Archive any old link into history (use discord_id column)
        $backupSql = <<<'SQL'
            INSERT INTO discord_accounts_history (discord, uuid, linked_at)
            SELECT discord, uuid, NOW()
              FROM discord_accounts
             WHERE discord = :discord OR uuid = :uuid
        SQL;
        $stmt = $pdo->prepare($backupSql);
        $stmt->execute([
            ':discord' => $discordID,
            ':uuid'    => $minecraftUUID,
        ]);

        // Delete existing link(s)
        $deleteSql = "
            DELETE FROM discord_accounts
             WHERE discord = :discord OR uuid = :uuid
        ";
        $pdo->prepare($deleteSql)->execute([
            ':discord' => $discordID,
            ':uuid'    => $minecraftUUID,
        ]);

        // Insert the new link
        $pdo->prepare(
            "INSERT INTO discord_accounts (discord, uuid) VALUES (:discord, :uuid)"
        )->execute([
            ':discord' => $discordID,
            ':uuid'    => $minecraftUUID,
        ]);

        $pdo->commit();

    } catch (PDOException $e) {
        $pdo->rollBack();
        die("Linking transaction failed: " . $e->getMessage());
    }

    // Notify Minecraft server asynchronously
    try {
        $pdo->prepare(
            "INSERT INTO discord_notification
                (discord, uuid, mc_username, discord_username, timestamp)
              VALUES (?, ?, ?, ?, ?)"
        )->execute([
            $discordID,
            $minecraftUUID,
            $minecraftUsername,
            $discordUsername,
            time()
        ]);
    } catch (PDOException $e) {
        error_log("Failed to insert notification: " . $e->getMessage());
    }

    // Confirmation message
    echo sprintf(
        "Successfully linked Minecraft UUID %s with Discord %s (ID: %s).",
        htmlspecialchars($minecraftUUID),
        htmlspecialchars($discordUsername),
        htmlspecialchars($discordID)
    );

    // Cleanup session and cookies
    unset(
        $_SESSION['oauth_state'],
        $_SESSION['minecraft_uuid'],
        $_SESSION['minecraft_code'],
        $_SESSION['minecraft_username']
    );
    setcookie("oauth_state", "", time() - 3600, "/");
}
?>
