// src/components/BattleTimes.js
import React from 'react';

const battleTimesUTC = {
  Friday: ["21:00","23:15"],
  Saturday: ["01:30","03:45","06:00","08:15","10:30","12:45","15:00","17:15","19:30","21:45"],
  Sunday: ["00:00","02:15","04:30","06:45","09:00","11:15","13:30","15:45","18:00","20:15","22:30"],
  Monday: ["00:45"]
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