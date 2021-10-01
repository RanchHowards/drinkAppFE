import React from 'react'
import { Link } from 'react-router-dom'

const MyEvent = ({ event, token, userInfo }) => {
  return (
    <div>
      <div className="event-info-top">
        <p style={{ fontSize: '100px' }}>{event.title}</p>
        <img src={userInfo.pic} alt="host" className="event-host-pic"></img>
      </div>
      <img src={event.eventPic} alt="event" className="event-pic"></img>
      <div className="event-info-bottom">
        <div>{event.eventType}</div>
        <div>{event.location}</div>
        <div>SOMETHING</div>
      </div>
      <Link to={`/editevent/${event.id}`}>
        <button className="edit-button">EDIT</button>
      </Link>
    </div>
  )
}

export default MyEvent
