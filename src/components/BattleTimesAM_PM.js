// src/components/BattleTimesAM_PM.js
import React from 'react';

const battleTimesUTC = {
  Friday: ["18:00", "21:00"],
  Saturday: ["00:00", "02:30", "05:00", "07:30", "10:00", "12:30", "15:00", "17:30", "20:00", "22:30"],
  Sunday: ["00:00", "02:30", "05:00", "07:30", "10:00", "12:30", "15:00", "17:30", "20:00", "22:30"]
};

function convertToLocalTime(utcDay, utcTime) {
  const [hour, minute] = utcTime.split(":").map(Number);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  const targetDay = daysOfWeek.indexOf(utcDay);
  const currentDay = now.getUTCDay();
  const daysUntil = (targetDay - currentDay + 7) % 7;

  const utcDate = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + daysUntil,
    hour,
    minute
  ));

  return utcDate.toLocaleTimeString([], {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // AM/PM formatted times
  });
}

const BattleTimesAM_PM = () => {
  return (
    <ul>
      {Object.entries(battleTimesUTC).map(([day, times]) => (
        <li key={day}>
          <strong>{day}:</strong> {times.map(t => convertToLocalTime(day, t)).join(", ")}
        </li>
      ))}
    </ul>
  );
};

export default BattleTimesAM_PM;
