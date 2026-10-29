import { useState } from "react";
import { Greeting } from "./Greeting";
import { SlotTable } from "./SlotTable";
import { StatusMessage } from "./StatusMessage";
import { slots } from "./types";

export default function App() {
  const [booked, setBooked] = useState<string[]>([]);

  function toggleBooking(day: string) {
    setBooked((current) =>
      current.includes(day) ? current.filter((item) => item !== day) : [...current, day],
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <p className="eyebrow">WEB ENGINEERING · LAB 06</p>
        <Greeting name="World" />
      </header>
      <main id="main-content" className="content">
        <section className="panel" aria-labelledby="office-hours-title">
          <h2 id="office-hours-title">Office Hours</h2>
          <p className="text-muted">Select a slot to book it, or cancel a booking.</p>
          <SlotTable slots={slots} booked={booked} onToggle={toggleBooking} />
          <StatusMessage count={booked.length} total={slots.length} />
        </section>
      </main>
      <footer className="site-footer">React components · props · state · callbacks</footer>
    </>
  );
}
