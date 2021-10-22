import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useParams, useHistory } from 'react-router-dom'
import { ALL_EVENTS, EDIT_EVENT, FIND_EVENT, DELETE_EVENT } from '../queries'

import { cache, eventsArrVar } from '../cache'

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
      setMax(data.findEvent.max)
      const date = data.findEvent.eventDate
      setEventDate(
        `${date.slice(0, 4)}-${date.slice(5, 7)}-${date.slice(
          8,
          10
        )}T${new Date(date).toLocaleTimeString().slice(0, 5)}`
      )

      setMaxGuests(data.findEvent.maxGuests)
    },
  })

  const [editEvent] = useMutation(EDIT_EVENT, {
    onError: (err) => {
      setNotify(err.message)
    },
    refetchQueries: [{ query: ALL_EVENTS }],
  })

  const [deleteEvent] = useMutation(DELETE_EVENT)

  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventPic, setEventPic] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [max, setMax] = useState('')
  const [maxGuests, setMaxGuests] = useState(0) //problem with this in console

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
        max,
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
    setMax('')
    setMaxGuests(0)
    history.push('/events')
  }

  const handleDelete = (id) => {
    deleteEvent({ variables: { eventId: id } })
    cache.evict({ id: `Event:${id}` }) //this is the CacheId
    cache.gc()
    eventsArrVar([...eventsArrVar()].filter((e) => e.id !== id))
    history.push('/events')
  }
  if (loading) return <div>LOADING</div>

  if (error) return <div>{error}</div>

  const event = data.findEvent
  return (
    <div className="edit-event-container">
      <div>
        <form onSubmit={handleEvent} className="event-form">
          <div className="radio-buttons">
            <label>
              BYOB
              <input
                value="BYOB"
                type="radio"
                name="event type"
                checked={eventType === 'BYOB'}
                onChange={({ target }) => setEventType(target.value)}
              ></input>
            </label>
            <label>
              Bar
              <input
                value="Bar"
                type="radio"
                name="event type"
                checked={eventType === 'Bar'}
                onChange={({ target }) => setEventType(target.value)}
              ></input>
            </label>
            <label>
              Club
              <input
                value="Club"
                type="radio"
                name="event type"
                checked={eventType === 'Club'}
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
              style={max ? { display: 'inline-block' } : { display: 'none' }}
              value={maxGuests}
              type="number"
              min="0" //problmes here need to fx
              placeholder="no limit"
              onChange={({ target }) => {
                setMaxGuests(parseInt(target.value))
              }} //changing to an Integer from String
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
            type="submit"
            className="button"
            style={{ alignSelf: 'center' }}
          >
            Edit Event
          </button>
        </form>
        <button
          className="button leave-button"
          style={{ alignSelf: 'center' }}
          onClick={() => handleDelete(id)}
        >
          DELETE
        </button>
      </div>
      <img src={event.eventPic} className="event-pic" alt="event"></img>
    </div>
  )
}

export default EditEvent
