import React from 'react'

const Events = ({ events }) => {
  return (
    <div>
      <ul>
        {events.map((event) => {
          return <li key={event}>{event}</li>
        })}
      </ul>
    </div>
  )
}

export default Events
