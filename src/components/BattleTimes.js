// src/components/BattleTimes.js
import React from 'react';

const battleTimesUTC = {
  Friday: ["14:45", "17:30", "20:15", "23:00"],
  Saturday: ["01:45", "04:30", "07:15", "10:00", "12:45", "15:30", "18:15", "21:00", "23:45"],
  Sunday: ["02:30", "05:15", "08:00", "10:45", "13:30", "16:15", "19:00", "21:45"]
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
    hour12: false
  });
}

const BattleTimes = () => {
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

export default BattleTimes;