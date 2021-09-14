import React from 'react'

const Event = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      {event.host.username}
    </div>
  )
}

export default Event
