// components/CalendarEmbed.tsx
import { useEffect, useState } from 'react';

export default function CalendarEmbed() {
  const [tz, setTz] = useState('GMT');

  useEffect(() => {
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTz(localTimeZone);
  }, []);

  const calendarSrc = `https://calendar.google.com/calendar/embed?src=77b56aef66c9b46990e75cec9f086c23c403f6c1c1ca38dfd2ef810111d49da7%40group.calendar.google.com&ctz=${encodeURIComponent(tz)}`;

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