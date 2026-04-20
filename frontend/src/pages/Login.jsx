import { useState } from 'react'
import { api } from '../api'
import { useBooking } from '../context/BookingContext'

export default function Login() {
  const { user, setUser } = useBooking()
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await api.login(form)
      setUser({ name: form.name || data.email.split('@')[0], email: data.email, token: data.token })
      setMessage('Logged in successfully.')
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <main className="auth-layout">
      <section className="card auth-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="btn btn-accent" type="submit">
            Sign In
          </button>
        </form>
        {message && <p className="success">{message}</p>}
        {user && (
          <p className="muted">
            Current user: {user.name} ({user.email})
          </p>
        )}
      </section>
    </main>
  )
}
