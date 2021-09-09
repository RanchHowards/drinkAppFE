import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_EVENTS } from '../queries'

const Events = () => {
  const result = useQuery(ALL_EVENTS)

  if (result.loading) {
    return <div>LOADING</div>
  }

  const events = result.data.allEvents

  return (
    <div>
      <ul>
        {events.map((event) => {
          return <li key={event.id}>{event.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Events
