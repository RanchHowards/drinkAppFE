import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  ALL_EVENTS,
  IS_LOGGED_IN,
  JOIN_EVENT,
  LEAVE_EVENT,
  USER_INFO,
} from '../queries'
import { Link } from 'react-router-dom'

const BigButton = ({ event, setNotify }) => {
  const { data } = useQuery(IS_LOGGED_IN)

  const userInfo = useQuery(USER_INFO)

  const [joinEvent] = useMutation(JOIN_EVENT, {
    update: (store, response) => {
      try {
        const updatedEvent = response.data.joinEvent
        const dataInStore = store.readQuery({ query: ALL_EVENTS })
        store.writeQuery({
          query: ALL_EVENTS,
          data: {
            ...dataInStore,
            allEvents: dataInStore.allEvents.filter((e) =>
              e.id !== updatedEvent.id ? e : updatedEvent
            ),
          },
        })
      } catch (err) {
        throw new Error(err.message)
      }
    },
  })
  const [leaveEvent] = useMutation(LEAVE_EVENT, {
    update: (store, response) => {
      try {
        const updatedEvent = response.data.leaveEvent
        const dataInStore = store.readQuery({ query: ALL_EVENTS })
        store.writeQuery({
          query: ALL_EVENTS,
          data: {
            ...dataInStore,
            allEvents: dataInStore.allEvents.filter((e) =>
              e.id !== updatedEvent.id ? e : updatedEvent
            ),
          },
        })
      } catch (err) {
        throw new Error(err.message)
      }
    },
  })

  if (userInfo.loading) return <div>LOADING</div>
  else if (userInfo.error) return <div>{userInfo.error.message}</div>

  const user = userInfo.data.me

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
  } else if (!event.max || event.attendees.length < parseInt(event.maxGuests)) {
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
