import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { IS_LOGGED_IN, JOIN_EVENT, LEAVE_EVENT } from '../queries'
import { Link } from 'react-router-dom'

const BigButton = ({ event, user, setNotify }) => {
  const { data } = useQuery(IS_LOGGED_IN)

  const [joinEvent] = useMutation(JOIN_EVENT)
  const [leaveEvent] = useMutation(LEAVE_EVENT)

  const going = !event.attendees.every((person) => person?.id !== user?.id)

  const joinEventClick = () => {
    joinEvent({ variables: { userId: user.id, eventId: event.id } })
    setNotify(`you're going to ${event.title}`, 'navbar-success')
  }
  const leaveEventClick = () => {
    leaveEvent({ variables: { userId: user.id, eventId: event.id } })
    setNotify(`you're NO LONGER going to ${event.title}`, 'navbar-error')
  }

  if (!data.isLoggedIn) {
    return null
  } else if (user?.id === event.host.id) {
    return (
      <Link to={`/editevent/${event.id}`}>
        <button className="button edit-button">Edit</button>
      </Link>
    )
  } else if (
    !event.maxGuests ||
    event.attendees.length < parseInt(event.maxGuests)
  ) {
    if (going) {
      return (
        <button onClick={leaveEventClick} className="button leave-button">
          LEAVE
        </button>
      )
    }
    return (
      <button onClick={joinEventClick} className="button join-button">
        JOIN
      </button>
    )
  }
  return (
    <button disabled className="button full-button">
      FULL
    </button>
  )
}

export default BigButton
