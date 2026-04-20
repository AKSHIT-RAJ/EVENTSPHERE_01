import { Link } from 'react-router-dom'

export default function EventCard({ event }) {
  return (
    <article className="card event-card">
      <div className="event-badge">{event.category}</div>
      <h3>{event.title}</h3>
      <p className="muted">{event.venue}</p>
      <p className="price">₹{event.price}</p>
      <div className="card-actions">
        <Link className="btn btn-dark" to={`/events/${event.id}`}>
          Details
        </Link>
        <Link className="btn btn-light" to={`/events/${event.id}`}>
          Book Now
        </Link>
      </div>
    </article>
  )
}
