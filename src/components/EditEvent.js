import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useParams, useHistory } from 'react-router-dom'
import { ALL_EVENTS, EDIT_EVENT, FIND_EVENT } from '../queries'

const EditEvent = ({ token }) => {
  const history = useHistory()

  const id = useParams().id

  const { loading, error, data } = useQuery(FIND_EVENT, {
    variables: { eventId: id },
    fetchPolicy: 'network-only',
    onCompleted: () => {
      setEventName(data.findEvent.title)
      setEventPic(data.findEvent.eventPic)
      setLocation(data.findEvent.location)
    },
  })

  const [editEvent] = useMutation(EDIT_EVENT, {
    refetchQueries: [{ query: ALL_EVENTS }],
  })

  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('') //needs to be figured out
  const [eventPic, setEventPic] = useState('')
  const [location, setLocation] = useState('')

  const handleEvent = (event) => {
    event.preventDefault()

    editEvent({
      variables: {
        title: eventName,
        eventType,
        eventPic,
        location,
        eventId: id,
      },
    })
    setEventName('')
    setEventType('')
    setEventPic('')
    setLocation('')
    history.push('/events')
  }
  if (loading) return <div>LOADING</div>

  if (error) return <div>{error}</div>

  const event = data.findEvent
  return (
    <div className="edit-event-container">
      <form onSubmit={handleEvent}>
        <input
          value={eventName}
          placeholder="Title"
          onChange={({ target }) => setEventName(target.value)}
        ></input>
        <div className="radio-buttons">
          <label>
            BYOB
            <input
              value="BYOB"
              type="radio"
              name="event type"
              onChange={({ target }) => setEventType(target.value)}
            ></input>
          </label>
          <label>
            Bar
            <input
              value="Bar"
              type="radio"
              name="event type"
              onChange={({ target }) => setEventType(target.value)}
            ></input>
          </label>
          <label>
            Club
            <input
              value="Club"
              type="radio"
              name="event type"
              onChange={({ target }) => setEventType(target.value)}
            ></input>
          </label>
        </div>
        <input
          value={eventPic}
          placeholder="Pic"
          onChange={({ target }) => setEventPic(target.value)}
        ></input>
        <input
          value={location}
          placeholder="Location"
          onChange={({ target }) => setLocation(target.value)}
        ></input>
        <button type="submit">EDIT Event</button>
      </form>
      <img src={event.eventPic} alt="event"></img>
    </div>
  )
}

export default EditEvent
