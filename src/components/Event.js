import React from 'react'
import BigButton from './BigButton'
import { Link } from 'react-router-dom'

const Event = ({ event, token, user, setNotify }) => {
  const date = new Date(event.eventDate)

  return (
    <div>
      <div className="event-info-top">
        <Link to={`/events/${event.id}`}>
          <p style={{ fontSize: '60px' }}>{event.title}</p>
        </Link>
        <img src={event.host.pic} alt="host" className="event-host-pic"></img>
      </div>
      <img src={event.eventPic} alt="event" className="event-pic"></img>
      <div className="event-info-bottom">
        <div>{event.eventType}</div>
        <div>{event.location}</div>
        <div>
          <div>{date.toLocaleDateString()}</div>
          <div>{date.toLocaleTimeString()}</div>
        </div>
      </div>

      <BigButton event={event} user={user} setNotify={setNotify} />
    </div>
  )
}

export default Event
