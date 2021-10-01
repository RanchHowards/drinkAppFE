import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useParams, useHistory } from 'react-router-dom'
import { ALL_EVENTS, EDIT_EVENT, FIND_EVENT } from '../queries'

const EditEvent = ({ token, setNotify }) => {
  const history = useHistory()

  const id = useParams().id

  const { loading, error, data } = useQuery(FIND_EVENT, {
    variables: { eventId: id },
    fetchPolicy: 'network-only',
    onCompleted: () => {
      setEventName(data.findEvent.title)
      setEventPic(data.findEvent.eventPic)
      setLocation(data.findEvent.location)
      setEventType(data.findEvent.eventType)
      setDescription(data.findEvent.description)
      setMaxGuests(data.findEvent.maxGuests)
      setEventDate(data.findEvent.eventDate)
    },
  })

  const [editEvent] = useMutation(EDIT_EVENT, {
    onError: (err) => {
      setNotify(err.message)
    },
    refetchQueries: [{ query: ALL_EVENTS }],
  })

  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('') //needs to be figured out
  const [eventPic, setEventPic] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [maxGuests, setMaxGuests] = useState('')

  const handleEvent = (event) => {
    event.preventDefault()

    editEvent({
      variables: {
        title: eventName,
        eventType,
        eventPic,
        location,
        description,
        eventDate,
        maxGuests,
        eventId: id,
      },
    })
    setEventName('')
    setEventType('')
    setEventPic('')
    setLocation('')
    setDescription('')
    setEventDate('')
    setMaxGuests('')
    history.push('/events')
  }
  if (loading) return <div>LOADING</div>

  if (error) return <div>{error}</div>

  const event = data.findEvent
  return (
    <div className="edit-event-container">
      <form onSubmit={handleEvent} className="event-form">
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
          value={eventName}
          placeholder="Title"
          onChange={({ target }) => setEventName(target.value)}
        ></input>
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
        <input
          value={maxGuests}
          type="number"
          min="2"
          placeholder="no limit"
          onChange={({ target }) => setMaxGuests(parseInt(target.value))} //changing to an Integer from String
        ></input>
        <input
          value={eventDate}
          type="datetime-local"
          onChange={({ target }) => setEventDate(target.value)}
        ></input>
        <textarea
          value={description}
          placeholder="How's it going to be?"
          onChange={({ target }) => setDescription(target.value)}
        ></textarea>
        <button type="submit">Edit Event</button>
      </form>
      <img src={event.eventPic} className="event-pic" alt="event"></img>
    </div>
  )
}

export default EditEvent
