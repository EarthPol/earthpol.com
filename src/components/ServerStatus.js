import React, { useEffect, useState } from 'react';
import styles from './ServerStatus.module.css'; // optional if you want to style it

export default function ServerStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('https://api.mcsrvstat.us/2/play.earthpol.com')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.online) {
          setStatus(`${data.players.online} / ${data.players.max} players online`);
        } else {
          setStatus('Server is offline');
        }
      })
      .catch(() => {
        setStatus('⚠️ Could not fetch server status');
      });
  }, []);

  return (
    <div className={styles.serverStatus || ''}>
      {status || 'Loading server status...'}
    </div>
  );
}