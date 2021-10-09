import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'

import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'
import CreateEvent from './components/CreateEvent'
import Profile from './components/Profile'
import Register from './components/Register'
import MyEvents from './components/MyEvents'
import EditEvent from './components/EditEvent'
import EventShow from './components/EventShow'
import Attendees from './components/Attendees'
import Host from './components/Host'
import Filter from './components/Filter'

import { useMutation, useApolloClient, useQuery } from '@apollo/client'
import { CREATE_USER, LOGIN, ADD_EVENT, ALL_EVENTS } from './queries'

import { isLoggedInVar } from './cache'

function App() {
  const events = useQuery(ALL_EVENTS)
  //STATE
  const [token, setToken] = useState(null)
  const [notification, setNotification] = useState(null)
  const [type, setType] = useState([])
  const [period, setPeriod] = useState(null)

  const client = useApolloClient()

  const history = useHistory()

  const setNotify = (message, type = 'navbar-error') => {
    //THIS NEEDS TO BE FIXED TO SHOW FULL LENGTH OF BUTTON
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 2500)
  }

  //MUTATIONS
  const [createUser, createResult] = useMutation(CREATE_USER, {
    onError: (err) => {
      setNotify(err.message)
      console.log('error from createUser mutation in App.js', err)
    },
    onCompleted: ({ createUser }) => {
      //join/leave buttons don't function after creation of new account
      localStorage.setItem('user-token', login.value)
      setToken(createUser.value)
      isLoggedInVar(true)
      history.push('/events')
      setNotify('Welcome to dRank!', 'navbar-success')
    },
  })
  const [login, loginResult] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login) {
        localStorage.setItem('user-token', login.value)
        setToken(login.value)
        isLoggedInVar(true)
        history.push('/events')
        setNotify('Welcome!', 'navbar-success') //could add username to notification
      }
    },
    onError: (err) => {
      setNotify(err.message)
      console.log('error from LOGIN mutation in App.js', err)
    },
  })

  const signOut = () => {
    client.clearStore()
    localStorage.clear()
    setToken(null)
    history.push('/')
    return isLoggedInVar(false)

    //HUGE FUCKING DIFFERENCE BETWEEN clearStore & resetStore!!!!!!! not sure resetStore does anything
  }

  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: [{ query: ALL_EVENTS }],
    onError: (error) => {
      setNotify(error.message)
      setTimeout(() => setNotification(null), 2000)
      console.log(error)
    },
    onCompleted: ({ addEvent }) => {
      setNotify(`${addEvent.title} is happening!`, 'navbar-success')
    },
  })

  //checks for token of previous session
  useEffect(() => {
    const previousToken = localStorage.getItem('user-token')
    if (previousToken) {
      setToken(previousToken)
    }
  }, [])

  //sets token after creating account
  useEffect(() => {
    if (createResult.data) {
      setToken(createResult.data.createUser.value)
      localStorage.setItem('user-token', createResult.data.createUser.value) //not sure why can't use Token, but 'null' is inserted
    }
  }, [createResult.data]) //eslint-disable-line

  if (events.error || loginResult.error) return <div>ERROR </div>
  if (events.loading || loginResult.loading) return <div>LOADING </div>

  const eventsCopy = [...events.data.allEvents]
  const eventsCopy1 = !type.length
    ? eventsCopy
    : eventsCopy.filter((event) => type.includes(event.eventType))

  const eventsInfo = !period // left off here. not workng correctly
    ? eventsCopy1
    : eventsCopy1
        .filter((event) => new Date(event.eventDate) >= new Date())
        .filter((event) => new Date(period) - new Date(event.eventDate) >= 0)

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          token ? children : <Redirect to="/events" />
        }
      />
    )
  }

  return (
    <div>
      <Navbar
        login={login}
        createUser={createUser}
        token={token}
        signOut={signOut}
        notification={notification}
      />
      <div className="main-container">
        <div className="main">
          <Switch>
            <PrivateRoute path="/createevent">
              <CreateEvent
                addEvent={addEvent}
                history={history}
                setNotify={setNotify}
              />
            </PrivateRoute>
            <PrivateRoute path="/editevent/:id">
              <EditEvent history={history} setNotify={setNotify} />
            </PrivateRoute>

            <PrivateRoute path="/myevents">
              <MyEvents eventsInfo={eventsInfo} />
            </PrivateRoute>
            <PrivateRoute path="/events/:id">
              <EventShow setNotify={setNotify} />
            </PrivateRoute>

            <Route path="/register">
              <Register createUser={createUser} history={history} />
            </Route>
            <Route path="/events">
              <Events eventsInfo={eventsInfo} setNotify={setNotify} />
            </Route>
            <Route path="/">POOP</Route>
          </Switch>
        </div>
        <aside className="aside aside-1">
          <Switch>
            <PrivateRoute path="/events/:id">
              <Attendees />
            </PrivateRoute>
            <Route path="/events">
              <Filter type={type} setType={setType} setPeriod={setPeriod} />
            </Route>
          </Switch>
        </aside>
        <aside className="aside aside-2">
          <Switch>
            <PrivateRoute path="/events/:id">
              <Host />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Profile />
            </PrivateRoute>
          </Switch>
        </aside>

        <footer className="footer">FOOTER</footer>
      </div>
    </div>
  )
}

export default App
