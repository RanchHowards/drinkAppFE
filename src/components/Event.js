import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { IS_LOGGED_IN, JOIN_EVENT, LEAVE_EVENT } from '../queries'

const Event = ({ event, token, user }) => {
  const [joinEvent] = useMutation(JOIN_EVENT)
  const [leaveEvent] = useMutation(LEAVE_EVENT)
  const joinEventClick = () => {
    joinEvent({ variables: { userId: user.id, eventId: event.id } })
    alert(`you're going to ${event.title}`)
  }
  const leaveEventClick = () => {
    leaveEvent({ variables: { userId: user.id, eventId: event.id } })
    alert(`you're NO LONGER going to ${event.title}`)
  }

  const going = !event.attendees.every((person) => person?.id !== user?.id)
  const Button = () => {
    if (going) {
      return (
        <button onClick={leaveEventClick} className="leave-button">
          LEAVE
        </button>
      )
    }
    return (
      <button onClick={joinEventClick} className="join-button">
        JOIN
      </button>
    )
  }
  const Edit = () => {
    return (
      <Link to={`/editevent/${event.id}`}>
        <button className="edit-button">Edit</button>
      </Link>
    )
  }

  const IsLoggedIn = ({ option }) => {
    const { data } = useQuery(IS_LOGGED_IN)
    return data.isLoggedIn ? option : null
  }
  return (
    <div>
      <div className="event-info-top">
        <Link to={`/events/${event.id}`}>
          <p style={{ fontSize: '100px' }}>{event.title}</p>
        </Link>
        <img src={event.host.pic} alt="host" className="event-host-pic"></img>
      </div>
      <img src={event.eventPic} alt="event" className="event-pic"></img>
      <div className="event-info-bottom">
        <div>{event.eventType}</div>
        <div>{event.location}</div>
        <div>{event.attendees.length}</div>
      </div>

      <IsLoggedIn
        option={
          user?.id === event.host.id ? (
            <Edit />
          ) : (
            <Button handleEvent={joinEventClick} />
          )
        }
      />
    </div>
  )
}

export default Event
