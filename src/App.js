import React, { useState, useEffect } from 'react'

import './App.css'
import Events from './components/Events'

import { useMutation, useLazyQuery, useApolloClient } from '@apollo/client'
import { ADD_EVENT, ALL_EVENTS, CREATE_USER, LOGIN, USER_INFO } from './queries'

function App() {
  //sign in
  //sign up
  //create post
  //edit profile
  //show posts

  //STATE
  const [eventName, setEventName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [token, setToken] = useState(null)
  const [showName, setShowName] = useState(null)

  const [userInfo, userInfoResult] = useLazyQuery(USER_INFO)

  const client = useApolloClient()

  //MUTATIONS
  const [createUser] = useMutation(CREATE_USER, {
    onError: (err) =>
      console.log('error from createUser mutation in App.js', err),
  })
  const [login, result] = useMutation(LOGIN, {
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
    if (result.data) {
      setToken(result.data.login.value)
      localStorage.setItem('user-token', result.data.login.value) //for some reaosn can't use TOKEN here...
    }
  }, [result.data]) // eslint-disable-line

  useEffect(() => {
    if (userInfoResult.data && userInfoResult.data.me) {
      setShowName(userInfoResult.data.me.username)
      console.log(showName)
    }
  }, [userInfoResult]) //eslint-disable-line

  const signIn = () => {
    if (!showSignIn) {
      setShowSignIn(true)
    } else {
      login({ variables: { username, password } })

      setShowSignIn(false)
      setUsername('')
      setPassword('')
    }
  }
  const signUp = () => {
    if (!showSignUp) {
      setShowSignUp(true)
    } else {
      createUser({ variables: { username, password } })
      setShowSignUp(false)
      setUsername('')
      setPassword('')
    }
  }

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
        <div>
          <button onClick={signIn}>sign in</button>
          <button onClick={signUp}>sign up</button>
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
          {showSignUp && (
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
  else if (token)
    return (
      <div>
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
    )
}

export default App
