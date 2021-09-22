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

const EventShow = ({ token }) => {
  const id = useParams().id

  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  const userInfo = useQuery(USER_INFO)

  const [joinEvent] = useMutation(JOIN_EVENT)
  const [leaveEvent] = useMutation(LEAVE_EVENT)
  if (eventInfo.loading || userInfo.loading) return <div>LOADING</div>
  console.log(eventInfo)
  console.log(userInfo)
  if (eventInfo.error || userInfo.error) return <div>ERROR</div> //make this better

  const joinEventClick = () => {
    joinEvent({ variables: { userId: user.id, eventId: event.id } })
    alert(`you're going to ${event.title}`)
  }
  const leaveEventClick = () => {
    leaveEvent({ variables: { userId: user.id, eventId: event.id } })
    alert(`you're NO LONGER going to ${event.title}`)
  }
  const event = eventInfo.data.findEvent
  const user = userInfo.data.me

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
    <div className="event">
      <div className="event-info-top">
        <p style={{ fontSize: '100px' }}>{event.title}</p>
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

export default EventShow
