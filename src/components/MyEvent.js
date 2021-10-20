import React from 'react'
import { Link } from 'react-router-dom'

const MyEvent = ({ event, token, userInfo }) => {
  const date = new Date(event.eventDate)
  const t = new Date()
  const today = new Date(t.getFullYear(), t.getMonth(), t.getDate())
  const active = date >= today

  return (
    <div>
      <div className="event-info-top">
        <Link to={`/events/${event.id}`}>
          <p style={{ fontSize: '100px' }}>{event.title}</p>
        </Link>
        {/* <img src={userInfo.pic} alt="host" className="event-host-pic"></img> */}
      </div>
      <img src={event.eventPic} alt="event" className="event-pic"></img>
      <div className="event-info-bottom">
        <div>{event.eventType}</div>
        <div>{event.location}</div>
        <div>
          <div>{date.toLocaleDateString()}</div>
          <div style={{ textAlign: 'center' }}>
            {date.toLocaleTimeString().slice(0, 5)}
          </div>
        </div>
      </div>
      {active && (
        <Link to={`/editevent/${event.id}`}>
          <button className="edit-button button">EDIT</button>
        </Link>
      )}
    </div>
  )
}

export default MyEvent
