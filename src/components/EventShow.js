import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import {
  FIND_EVENT,
  IS_LOGGED_IN,
  JOIN_EVENT,
  LEAVE_EVENT,
  USER_INFO,
} from '../queries'

const EventShow = ({ token, setNotify }) => {
  const id = useParams().id

  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  const userInfo = useQuery(USER_INFO)

  const [joinEvent] = useMutation(JOIN_EVENT)
  const [leaveEvent] = useMutation(LEAVE_EVENT)
  if (eventInfo.loading || userInfo.loading) return <div>LOADING</div>

  if (eventInfo.error || userInfo.error) return <div>ERROR</div> //make this better

  const joinEventClick = () => {
    joinEvent({ variables: { userId: user.id, eventId: event.id } })
    setNotify(`you're going to ${event.title}`, 'navbar-success')
  }
  const leaveEventClick = () => {
    leaveEvent({ variables: { userId: user.id, eventId: event.id } })
    setNotify(`you're NO LONGER going to ${event.title}`, 'navbar-error')
  }
  const event = eventInfo.data.findEvent
  const user = userInfo.data.me

  const date = new Date(event.eventDate)

  const going = !event.attendees.every((person) => person.id !== user.id)
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
      <div className="events-container">
        <div className="event">
          <div className="event-info-top">
            <p style={{ fontSize: '100px' }}>{event.title}</p>
            {/* <img
              src={event.host.pic}
              alt="host"
              className="event-host-pic"
            ></img> */}
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
          <div className="event-description">{event.description}</div>
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
      </div>
    </div>
  )
}

export default EventShow
