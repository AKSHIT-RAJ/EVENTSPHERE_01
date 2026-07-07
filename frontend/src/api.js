const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || 'Request failed')
  }

  return response.status === 204 ? null : response.json()
}

export const api = {
  listEvents: () => request('/events'),
  getEvent: (id) => request(`/events/${id}`),
  createBooking: (payload) => request('/bookings', {
    method: 'POST',
    body: JSON.stringify(payload)
  }),
  listBookings: (email) => request(`/bookings?email=${encodeURIComponent(email)}`),
  login: (payload) => request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}
