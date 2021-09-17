import React, { useState, useEffect } from 'react'

import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'
import CreateEvent from './components/CreateEvent'
import Profile from './components/Profile'

import { useMutation, useApolloClient } from '@apollo/client'
import { CREATE_USER, LOGIN, ADD_EVENT, ALL_EVENTS } from './queries'

function App() {
  //STATE
  const [token, setToken] = useState(null)
  const client = useApolloClient()

  //MUTATIONS
  const [createUser, createResult] = useMutation(CREATE_USER, {
    onError: (err) =>
      console.log('error from createUser mutation in App.js', err),
    // refetchQueries: [{ query: USER_INFO }],
  })
  const [login, loginResult] = useMutation(LOGIN, {
    onError: (err) => console.log('error from LOGIN mutation in App.js', err),
    // refetchQueries: [{ query: USER_INFO }],
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
      localStorage.setItem('user-token', loginResult.data.login.value) //not sure why can't use Token, but 'null' is inserted
    }
  }, [loginResult.data]) // eslint-disable-line

  //sets token after creating account
  useEffect(() => {
    if (createResult.data) {
      setToken(createResult.data.createUser.value)
      localStorage.setItem('user-token', createResult.data.createUser.value) //not sure why can't use Token, but 'null' is inserted
    }
  }, [createResult.data]) //eslint-disable-line

  const signOut = () => {
    localStorage.clear()
    setToken(null)
    client.clearStore() //clears cache from Apollo
    //HUGE FUCKING DIFFERENCE BETWEEN clearStore & resetStore!!!!!!! not sure resetStore does anything
  }

  if (!token)
    return (
      <div>
        <Navbar
          login={login}
          createUser={createUser}
          token={token}
          signOut={signOut}
        />
        <div className="wrapper">
          <div>
            <Events />
          </div>
        </div>
      </div>
    )
  else
    return (
      <div>
        <Navbar
          login={login}
          createUser={createUser}
          token={token}
          signOut={signOut}
        />
        <div className="wrapper">
          <div className="main">
            <Events />
          </div>
          <aside className="aside aside-1">
            <CreateEvent addEvent={addEvent} />
          </aside>

          <aside className="aside aside-2">
            <Profile />
          </aside>
          <footer className="footer">FOOTER</footer>
        </div>
      </div>
    )
}

export default App
