import React, { useState } from 'react'

// import { useMutation } from '@apollo/client'
// import { ADD_EVENT, ALL_EVENTS } from '../queries'

const CreateEvent = ({ addEvent }) => {
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('BYOB')
  const [eventPic, setEventPic] = useState('')
  const [location, setLocation] = useState('')

  const handleEvent = (event) => {
    event.preventDefault()

    addEvent({ variables: { title: eventName, eventType, eventPic, location } })
    setEventName('')
    setEventType('')
    setEventPic('')
    setLocation('')
  }

  return (
    <div className="create-event-container">
      <form onSubmit={handleEvent}>
        <input
          value={eventName}
          placeholder="Title"
          onChange={({ target }) => setEventName(target.value)}
        ></input>
        <div>
          <label>
            BYOB
            <input
              value="BYOB"
              type="radio"
              name="event type"
              checked
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
        <button type="submit">add Event</button>
      </form>
    </div>
  )
}

export default CreateEvent
