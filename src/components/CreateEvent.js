import React, { useState } from 'react'

// import { useMutation } from '@apollo/client'
// import { ADD_EVENT, ALL_EVENTS } from '../queries'

const CreateEvent = ({ addEvent, history }) => {
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('BYOB')
  const [eventPic, setEventPic] = useState(undefined)
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState(undefined)
  const [maxGuests, setMaxGuests] = useState(undefined)

  const handleEvent = (event) => {
    event.preventDefault()

    addEvent({
      variables: {
        title: eventName,
        eventType,
        eventPic,
        location,
        description,
        eventDate,
        maxGuests,
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

  return (
    <div className="create-event-container">
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
          onChange={({ target }) => setMaxGuests(parseInt(target.value))}
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
        <button type="submit">add Event</button>
      </form>
    </div>
  )
}

export default CreateEvent
