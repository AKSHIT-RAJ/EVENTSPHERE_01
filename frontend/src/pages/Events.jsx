import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data'
import EventCard from '../components/EventCard'

export default function Events() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(events.map((event) => event.category))]

  const filtered = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery =
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.venue.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || event.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <main>
      <section className="page-heading">
        <h1>Events</h1>
        <p>Search by name or venue. Filter by category.</p>
      </section>

      <div className="filters card">
        <input
          type="text"
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <section className="grid">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  )
}
