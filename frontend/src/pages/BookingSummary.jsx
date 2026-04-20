import { useMemo, useState } from 'react'
import { api } from '../api'
import { useBooking } from '../context/BookingContext'

export default function BookingSummary() {
  const { cart, user, updateQty, removeFromCart, clearCart } = useBooking()
  const [status, setStatus] = useState('')

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
    const serviceFee = cart.length ? 49 : 0
    const discount = subtotal >= 2000 ? 100 : 0
    return {
      subtotal,
      serviceFee,
      discount,
      total: subtotal + serviceFee - discount
    }
  }, [cart])

  const handleCheckout = async () => {
    if (!user) {
      setStatus('Please log in first.')
      return
    }
    try {
      await Promise.all(
        cart.map((item) =>
          api.createBooking({
            userName: user.name,
            userEmail: user.email,
            ...item
          })
        )
      )
      clearCart()
      setStatus('Booking saved successfully.')
    } catch (error) {
      setStatus(error.message)
    }
  }

  return (
    <main>
      <section className="page-heading">
        <h1>Booking Summary</h1>
        <p>Review selected tickets before checkout.</p>
      </section>

      <div className="summary-layout">
        <div className="card">
          <h2>Selected Tickets</h2>
          {cart.length === 0 && <p className="muted">No tickets selected yet.</p>}
          {cart.map((item) => (
            <div key={`${item.eventId}-${item.ticketType}`} className="summary-item">
              <div>
                <strong>{item.eventTitle}</strong>
                <p className="muted">{item.ticketType}</p>
              </div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQty(item.eventId, item.ticketType, Number(e.target.value))}
              />
              <p>₹{item.unitPrice * item.quantity}</p>
              <button className="link-button" onClick={() => removeFromCart(item.eventId, item.ticketType)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Order Summary</h2>
          <div className="totals">
            <div><span>Subtotal</span><strong>₹{totals.subtotal}</strong></div>
            <div><span>Service Fee</span><strong>₹{totals.serviceFee}</strong></div>
            <div><span>Discount</span><strong>-₹{totals.discount}</strong></div>
            <div className="total-line"><span>Total</span><strong>₹{totals.total}</strong></div>
          </div>
          <button className="btn btn-accent" onClick={handleCheckout}>Proceed to Payment</button>
          <p className="success">{status}</p>
        </div>
      </div>
    </main>
  )
}
