import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'
import CreateEvent from './components/CreateEvent'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Register from './components/Register'
import MyEvents from './components/MyEvents'
import EditEvent from './components/EditEvent'
import EventShow from './components/EventShow'
import Attendees from './components/Attendees'
import Host from './components/Host'
import Filter from './components/Filter'
import NoMatch from './components/NoMatch'
import PrivateRoute from './components/PrivateRoute'

import { useMutation, useApolloClient, useQuery } from '@apollo/client'
import { CREATE_USER, LOGIN, ADD_EVENT, ALL_EVENTS, USER_INFO } from './queries'

import { isLoggedInVar, userDataVar } from './cache'

import { filter } from './filter'

function App() {
  //QUERIES

  const events = useQuery(ALL_EVENTS, {
    onCompleted: ({ allEvents }) => {},
  })
  const userInfo = useQuery(USER_INFO, {
    onCompleted: ({ me }) => {
      userDataVar(me) //set local state w/ user info
    },
  })

  const client = useApolloClient()
  const history = useHistory()

  //STATE
  const [token, setToken] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [notification, setNotification] = useState(null)
  const [type, setType] = useState([])
  const [period, setPeriod] = useState(null)
  const [timeoutId, setTimeoutId] = useState(null)
  const [drinks, setDrinks] = useState([])
  const [sortName, setSortName] = useState([
    'Sort',
    'New',
    'Old',
    'Sooner',
    'Later',
  ])

  const setNotify = (message, type = 'navbar-error') => {
    clearTimeout(timeoutId)
    setNotification({ message, type })
    const timer = setTimeout(() => setNotification(null), 2500)
    setTimeoutId(timer)
  }
  ///////////////////
  ///  MUTATIONS  ///
  ///////////////////
  const [createUser, createResult] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      localStorage.setItem('user-token', createUser.value)
      setToken(createUser.value)
      isLoggedInVar(true)
      history.push('/events')
      setNotify('Welcome to dRank!', 'navbar-success')
      userInfo.refetch()
      userDataVar(createUser.user) //set local state w/ user info
    },
    update: (store, response) => {
      try {
        const dataInStore = store.readQuery({ query: USER_INFO })
        store.writeQuery({
          query: USER_INFO,
          data: { ...dataInStore, me: response.data.createUser.user },
        })
      } catch (err) {
        throw new Error(
          'error from App.js trying to write to Cache from createUser',
          err.message
        )
      }
    },
    onError: (err) => {
      setNotify(err.message)
      console.log('error from createUser mutation in App.js', err)
    },
  })
  const [login, loginResult] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login) {
        localStorage.setItem('user-token', login.value)

        setToken(login.value)
        isLoggedInVar(true)
        history.push('/events')
        setNotify(`Welcome ${login.user.username}!`, 'navbar-success')
        console.log(login.user)
        userDataVar(login.user) //set local state w/ user info
      }
    },
    onError: (err) => {
      setNotify(err.message)
      console.log('error from LOGIN mutation in App.js', err)
    },
    update: (store, response) => {
      try {
        const dataInStore = store.readQuery({ query: USER_INFO })
        store.writeQuery({
          query: USER_INFO,
          data: {
            ...dataInStore,
            me: response.data.login.user,
          },
        })
      } catch (err) {
        throw new Error(
          'error from App.js trying to write to Cache from createUser',
          err.message
        )
      }
    },
  })

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
    update: (store, res) => {
      const dataInStore = store.readQuery({ query: USER_INFO })
      store.writeQuery({
        query: USER_INFO,
        data: {
          ...dataInStore,
          me: {
            ...dataInStore.me,
            myEvents: [...dataInStore.me.myEvents, res.data.addEvent],
          },
        },
      })
    },
  })

  //checks for token of previous session
  useEffect(() => {
    const previousToken = localStorage.getItem('user-token')
    if (previousToken) {
      setToken(previousToken)
    }
  }, [])

  // sets token after loggn n account
  useEffect(() => {
    if (loginResult.data) {
      localStorage.setItem('user-token', loginResult.data.login.value) //not sure why can't use Token, but 'null' is inserted
      setToken(loginResult.data.login.value)
    }
  }, [loginResult.data]) //eslint-disable-line

  const signOut = async () => {
    localStorage.clear()
    setToken(null)
    history.push('/')
    await client.resetStore()
    return isLoggedInVar(false)
  }

  if (events.error || loginResult.error) return <div>ERROR </div>
  if (events.loading || loginResult.loading) return <div>LOADING </div>

  const drinksArr = events.data.allEvents.reduce((acc, cur) => {
    if (acc.includes(cur.host.drink)) {
      return acc
    }
    return acc.concat(cur.host.drink) //cannot use Push here, not sure why
  }, [])

  //FILTER

  const eventsInfo = filter(
    events.data.allEvents,
    type,
    period,
    drinks,
    sortName[0]
  )
  // eventsArrVar([...eventsInfo])

  return (
    <div>
      <Navbar
        login={login}
        token={token}
        signOut={signOut}
        notification={notification}
        sortName={sortName}
        setSortName={setSortName}
        type={type}
        setType={setType}
        period={period}
        setPeriod={setPeriod}
        drinksArr={drinksArr}
        drinks={drinks}
        setDrinks={setDrinks}
        setShowForm={setShowForm}
        showForm={showForm}
      />
      <div className="main-container">
        <div className="main">
          <Switch>
            <PrivateRoute path="/createevent" token={token}>
              <CreateEvent
                addEvent={addEvent}
                history={history}
                setNotify={setNotify}
              />
            </PrivateRoute>
            <PrivateRoute path="/editevent/:id" token={token}>
              <EditEvent history={history} setNotify={setNotify} />
            </PrivateRoute>

            <PrivateRoute path="/myevents" token={token}>
              <MyEvents />
            </PrivateRoute>
            <PrivateRoute path="/events/:id" token={token}>
              {/* need to add something for broken links */}
              <EventShow setNotify={setNotify} />
            </PrivateRoute>
            <Route path="/register">
              <Register
                createUser={createUser}
                createResult={createResult}
                history={history}
              />
            </Route>
            <Route path="/events">
              <Events events={eventsInfo} setNotify={setNotify} />
            </Route>
            <Route path="/" exact>
              <Landing setShowForm={setShowForm} showForm={showForm} />
            </Route>
            <Route to="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <aside className="aside aside-1">
          {token && (
            <Switch>
              <Route path="/events/:id">
                <Attendees />
              </Route>
              <Route path="/events">
                <Filter
                  type={type}
                  setType={setType}
                  period={period}
                  setPeriod={setPeriod}
                  drinksArr={drinksArr}
                  drinks={drinks}
                  setDrinks={setDrinks}
                  buttonClass="button"
                  dateClass="filter-dates"
                  checkBoxClass="filter-checkboxes"
                  drinksClass="filter-drinks"
                />
              </Route>
            </Switch>
          )}
        </aside>
        <aside className="aside aside-2">
          {token && (
            <Switch>
              <Route path="/events/:id">
                <Host />
              </Route>
              <Route path="/">
                <Profile />
              </Route>
            </Switch>
          )}
        </aside>
      </div>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
