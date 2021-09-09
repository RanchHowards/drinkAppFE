import React, { useState } from 'react'

import './App.css'
import Events from './components/Events'

import { useMutation } from '@apollo/client'
import { ADD_EVENT, ALL_EVENTS } from './queries'

function App() {
  //sign in
  //sign up
  //create post
  //edit profile
  //show posts

  const [signedIn, setSignIn] = useState(false)
  const [eventName, setEventName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSignIn, setShowSignIn] = useState(false)

  const signIn = () => {
    if (!showSignIn) {
      setShowSignIn(true)
    } else {
      setSignIn(true)
      setShowSignIn(false)
      setUsername('')
      setPassword('')
    }
  }

  const signOut = () => {
    setSignIn(false)
  }

  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: [{ query: ALL_EVENTS }],
    onError: (error) => console.log(error),
  })

  const handleEvent = (event) => {
    event.preventDefault()

    addEvent({ variables: { title: eventName } })
    setEventName('')
  }

  if (!signedIn)
    return (
      <div>
        <div>
          <button onClick={signIn}>sign in</button>
          <button>sign up</button>
          {showSignIn && (
            <div>
              <form>
                <div>
                  username
                  <input
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                  ></input>
                </div>
                <div>
                  password
                  <input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    type="password"
                  ></input>
                </div>
              </form>
            </div>
          )}
        </div>
        <Events />
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
        <Events />
      </div>
    )
}

export default App
