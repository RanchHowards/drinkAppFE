import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_EVENTS } from '../queries'
import Event from './Event'

const Events = () => {
  const result = useQuery(ALL_EVENTS)

  if (result.loading) {
    return <div>LOADING</div>
  }

  const events = result.data.allEvents

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
