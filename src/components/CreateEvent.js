import React, { useState } from 'react'

// import { useMutation } from '@apollo/client'
// import { ADD_EVENT, ALL_EVENTS } from '../queries'

const CreateEvent = ({ addEvent }) => {
  const [eventName, setEventName] = useState('')

  const handleEvent = (event) => {
    event.preventDefault()

    addEvent({ variables: { title: eventName } })
    setEventName('')
  }

  return (
    <div>
      <form onSubmit={handleEvent}>
        <input
          value={eventName}
          placeholder="Title"
          onChange={({ target }) => setEventName(target.value)}
        ></input>
        <button type="submit">add Event</button>
      </form>
    </div>
  )
}

export default CreateEvent
