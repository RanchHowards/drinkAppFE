import React, { useState, useEffect } from 'react'

import './App.css'
import Events from './components/Events'
function App() {
  //sign in
  //sign up
  //create post
  //edit profile
  //show posts

  const [signedIn, setSignIn] = useState(false)
  const [eventName, setEventName] = useState('')
  const [events, setEvents] = useState([])

  const signIn = () => {
    setSignIn(true)
  }

  const signOut = () => {
    setSignIn(false)
  }

  const handleEvent = (event) => {
    event.preventDefault()

    setEvents(events.concat(eventName))

    setEventName('')
  }
  if (!signedIn)
    return (
      <div>
        <div>
          <button onClick={signIn}>sign in</button>
          <button>sign up</button>
        </div>
        <Events events={events} />
      </div>
    )
  else
    return (
      <div>
        <button onClick={signOut}>sign out</button>
        you're signed in
        <form onSubmit={handleEvent}>
          event name
          <input
            value={eventName}
            onChange={({ target }) => setEventName(target.value)}
          ></input>
          <button type="submit">add Event</button>
        </form>
        <Events events={events} />
      </div>
    )
}

export default App
