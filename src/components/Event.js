import React from 'react'
import { useQuery } from '@apollo/client'
import { IS_LOGGED_IN } from '../queries'

const Event = ({ event, token }) => {
  const IsLoggedIn = () => {
    const { data } = useQuery(IS_LOGGED_IN)
    return data.isLoggedIn ? (
      <button className="join-button">JOIN</button>
    ) : null
  }
  return (
    <div>
      <div className="event-info-top">
        <p style={{ fontSize: '100px' }}>{event.title}</p>
        <img src={event.host.pic} alt="host" className="event-host-pic"></img>
      </div>
      <img src={event.eventPic} alt="event" className="event-pic"></img>
      <div className="event-info-bottom">
        <div>{event.eventType}</div>
        <div>{event.location}</div>
        <div>SOMETHING</div>
      </div>

      <IsLoggedIn />
    </div>
  )
}

export default Event
