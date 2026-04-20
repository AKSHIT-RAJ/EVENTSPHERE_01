import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('eventsphere-cart')) || []
    } catch {
      return []
    }
  })
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('eventsphere-user')) || null
    } catch {
      return null
    }
  })

  useEffect(() => {
    localStorage.setItem('eventsphere-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (user) {
      localStorage.setItem('eventsphere-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('eventsphere-user')
    }
  }, [user])

  const addToCart = (item) => {
    setCart((current) => {
      const index = current.findIndex((x) => x.eventId === item.eventId && x.ticketType === item.ticketType)
      if (index >= 0) {
        const updated = [...current]
        updated[index] = { ...updated[index], quantity: updated[index].quantity + item.quantity }
        return updated
      }
      return [...current, item]
    })
  }

  const updateQty = (eventId, ticketType, quantity) => {
    setCart((current) =>
      current.map((item) =>
        item.eventId === eventId && item.ticketType === ticketType
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    )
  }

  const removeFromCart = (eventId, ticketType) => {
    setCart((current) => current.filter((item) => !(item.eventId === eventId && item.ticketType === ticketType)))
  }

  const clearCart = () => setCart([])

  const value = useMemo(
    () => ({ cart, user, setUser, addToCart, updateQty, removeFromCart, clearCart }),
    [cart, user]
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used inside BookingProvider')
  }
  return context
}
