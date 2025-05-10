// components/CalendarEmbed.tsx
import { useEffect, useState } from 'react';

export default function CalendarEmbed() {
  const [tz, setTz] = useState('GMT');

  useEffect(() => {
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTz(localTimeZone);
  }, []);

  const calendarSrc = `https://calendar.google.com/calendar/embed?src=9e757efd976342914fc87eba2a49821648b7d6d30d2ba6515b1d05ff835eb084%40group.calendar.google.com&ctz=${encodeURIComponent(tz)}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <iframe
        src={calendarSrc}
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="EarthPol Calendar"
      />
    </div>
  );
}