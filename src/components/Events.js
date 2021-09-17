import React from 'react'
import Event from './Event'
import { useQuery } from '@apollo/client'
import { ALL_EVENTS } from '../queries'

const Events = () => {
  const { loading, error, data } = useQuery(ALL_EVENTS)

  if (loading) {
    return <div>LOADING</div>
  }

  if (error) {
    return <div>ERROR: {error}</div>
  }

  const events = data.allEvents

  return (
    <div>
      <ul className="container">
        {events.map((event) => {
          return (
            <li className="event" key={event.id}>
              <Event event={event} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Events
