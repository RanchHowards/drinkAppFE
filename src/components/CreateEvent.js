import React, { useState } from 'react'

const CreateEvent = ({ addEvent, history }) => {
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('BYOB')
  const [eventPic, setEventPic] = useState(undefined)
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [max, setMax] = useState(false)
  const [maxGuests, setMaxGuests] = useState(0) //problem with this in console

  const handleEvent = (event) => {
    event.preventDefault()
    const inputDate = eventDate === '' ? new Date() : eventDate

    addEvent({
      variables: {
        title: eventName,
        eventType,
        eventPic,
        location,
        description,
        eventDate: inputDate,
        max,
        maxGuests,
      },
    })
    setEventName('')
    setEventType('')
    setEventPic('')
    setLocation('')
    setDescription('')
    setEventDate('')
    setMaxGuests(0)
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>
            Max?
            <input
              type="checkbox"
              checked={max}
              onChange={({ target }) => setMax(target.checked)}
            ></input>
          </label>
          <input
            style={max ? { display: true } : { display: 'none' }}
            value={maxGuests}
            type="number"
            min="0"
            onChange={({ target }) => setMaxGuests(parseInt(target.value))}
          ></input>
        </div>
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
        <button
          className="button"
          style={{ alignSelf: 'center' }}
          type="submit"
        >
          add Event
        </button>
      </form>
    </div>
  )
}

export default CreateEvent
