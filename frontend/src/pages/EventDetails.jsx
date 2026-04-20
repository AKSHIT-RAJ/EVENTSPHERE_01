import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../api'
import { useBooking } from '../context/BookingContext'

export default function EventDetails() {
  const { id } = useParams()
  const { addToCart } = useBooking()
  const [event, setEvent] = useState(null)
  const [ticketType, setTicketType] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')

  useEffect(() => {
    api.getEvent(id).then((data) => {
      setEvent(data)
      setTicketType(data.ticketTypes?.[0]?.name || '')
    })
  }, [id])

  if (!event) {
    return <p>Loading event...</p>
  }

  const selected = event.ticketTypes.find((ticket) => ticket.name === ticketType) || event.ticketTypes[0]
  const total = selected.price * quantity

  const handleAdd = () => {
    addToCart({
      eventId: event.id,
      eventTitle: event.title,
      ticketType: selected.name,
      unitPrice: selected.price,
      quantity
    })
    setMessage('Added to booking summary.')
  }

  return (
    <main className="details-layout">
      <aside className="card details-side">
        <h2>{event.title}</h2>
        <p>{event.category}</p>
        <ul>
          {event.lineup.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>

      <section className="card details-main">
        <h1>{event.title}</h1>
        <p className="muted">{event.venue}</p>
        <p>
          {event.date} | {event.time}
        </p>
        <p className="price">Price: ₹{event.price}</p>
        <p>{event.description}</p>

        <label>
          Ticket Type
          <select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
            {event.ticketTypes.map((ticket) => (
              <option key={ticket.name} value={ticket.name}>
                {ticket.name} - ₹{ticket.price}
              </option>
            ))}
          </select>
        </label>

        <label>
          Quantity
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>

        <div className="summary-strip">
          <strong>Total: ₹{total}</strong>
          <button className="btn btn-accent" onClick={handleAdd}>
            Add to Summary
          </button>
        </div>

        {message && <p className="success">{message}</p>}
        <Link to="/bookings" className="btn btn-dark">
          Go to Booking Summary
        </Link>
      </section>
    </main>
  )
}
