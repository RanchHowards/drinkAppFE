import React from 'react'
import Event from './Event'

const Events = ({ token, eventsInfo, setNotify }) => {
  const copy = [...eventsInfo] //had to create a copy in order to get the SORT method to work
  const events = copy.sort(
    (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
  )

  return (
    <div>
      <ul className="events-container">
        {events?.map((event) => {
          return (
            <li className="event" key={event.id}>
              <Event event={event} token={token} setNotify={setNotify} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Events
