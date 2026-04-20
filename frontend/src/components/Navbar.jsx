import { Link, NavLink } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

export default function Navbar() {
  const { user, setUser, clearCart } = useBooking()

  const logout = () => {
    setUser(null)
    clearCart()
  }

  return (
    <header className="topbar">
      <div className="brand">
        <Link to="/">EventSphere</Link>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
        <NavLink to="/login">{user ? 'Profile' : 'Login'}</NavLink>
        {user && (
          <button className="link-button" onClick={logout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  )
}
