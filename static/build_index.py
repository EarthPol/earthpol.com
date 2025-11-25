import os
import json

# Change this to match your folder name
RECIPE_FOLDER = "./recipes"   # or "./recipe"

def build_index():
    if not os.path.isdir(RECIPE_FOLDER):
        print(f"Folder not found: {RECIPE_FOLDER}")
        return

    files = []
    for file in os.listdir(RECIPE_FOLDER):
        # Only include JSON files and skip index.json
        if file.endswith(".json") and file.lower() != "index.json":
            files.append(file)

    # Sort alphabetically for predictable ordering
    files.sort()

    index_path = os.path.join(RECIPE_FOLDER, "index.json")

    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(files, f, indent=2)

    print(f"index.json created with {len(files)} entries:")
    for f_name in files:
        print(f" - {f_name}")

if __name__ == "__main__":
    build_index()
