import { Link } from 'react-router-dom'
import { events } from '../data'
import EventCard from '../components/EventCard'

export default function Home() {
  return (
    <main>
      <section className="hero card">
        <div>
          <h1>Discover events and book tickets instantly</h1>
          <p>Browse events, choose ticket types, and keep the booking flow simple.</p>
        </div>
        <Link className="btn btn-accent" to="/events">
          Browse Events
        </Link>
      </section>

      <section className="grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  )
}
