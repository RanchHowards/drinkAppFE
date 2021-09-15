import React, { useState, useEffect } from 'react'

import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'

import { useMutation, useLazyQuery, useApolloClient } from '@apollo/client'
import { ADD_EVENT, ALL_EVENTS, CREATE_USER, LOGIN, USER_INFO } from './queries'

function App() {
  //STATE
  const [eventName, setEventName] = useState('')

  const [token, setToken] = useState(null)
  const [showName, setShowName] = useState(null)

  const [userInfo, userInfoResult] = useLazyQuery(USER_INFO)

  const client = useApolloClient()

  //MUTATIONS
  const [createUser, createResult] = useMutation(CREATE_USER, {
    onError: (err) =>
      console.log('error from createUser mutation in App.js', err),
  })
  const [login, loginResult] = useMutation(LOGIN, {
    onError: (err) => console.log('error from LOGIN mutation in App.js', err),
  })

  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: [{ query: ALL_EVENTS }],
    onError: (error) => console.log(error),
  })

  //checks for token of previous session
  useEffect(() => {
    const previousToken = localStorage.getItem('user-token')
    if (previousToken) {
      setToken(previousToken)
    }
  }, [])

  //sets token after loggin in
  useEffect(() => {
    if (loginResult.data) {
      setToken(loginResult.data.login.value)
      localStorage.setItem('user-token', token)
    }
  }, [loginResult.data]) // eslint-disable-line

  useEffect(() => {
    if (createResult.data) {
      setToken(createResult.data.createUser.value)
      localStorage.setItem('user-token', token)
    }
  }, [createResult.data]) //eslint-disable-line

  useEffect(() => {
    if (userInfoResult.data && userInfoResult.data.me) {
      setShowName(userInfoResult.data.me.username)
      console.log(showName)
    }
  }, [userInfoResult]) //eslint-disable-line

  const signOut = () => {
    client.resetStore() //clears cache from Apollo
    localStorage.clear()
    setToken(null)
    setShowName(null)
  }

  const clickName = () => {
    userInfo()
  }
  const handleEvent = (event) => {
    event.preventDefault()

    addEvent({ variables: { title: eventName } })
    setEventName('')
  }

  if (!token)
    return (
      <div>
        <Navbar
          login={login}
          createUser={createUser}
          signOut={signOut}
          token={token}
        />
        <div className="app">
          <div>
            <Events />
          </div>
        </div>
      </div>
    )
  else if (token)
    return (
      <div>
        <Navbar
          login={login}
          createUser={createUser}
          signOut={signOut}
          token={token}
        />
        <div className="app">
          <button onClick={signOut}>sign out</button>
          <button onClick={clickName}>show Username</button>
          you're signed in {showName}
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
      </div>
    )
}

export default App
