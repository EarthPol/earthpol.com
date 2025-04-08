// components/CalendarEmbed.tsx
import { useEffect, useState } from 'react';

export default function CalendarEmbed() {
  const [tz, setTz] = useState('GMT');

  useEffect(() => {
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTz(localTimeZone);
  }, []);

  const calendarSrc = `https://calendar.google.com/calendar/embed?src=c_a520903dd12481f5e710117af38b022b62c1c87eb1368ab23b941954180bc3b1%40group.calendar.google.com&ctz=${encodeURIComponent(tz)}`;

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