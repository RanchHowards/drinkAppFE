import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Notification from './Notification'
import Filter from './Filter'

const Navbar = ({
  login,
  signOut,
  token,
  notification,
  sortName,
  setSortName,
  type,
  setType,
  period,
  setPeriod,
  drinksArr,
  drinks,
  setDrinks,
  showForm,
  setShowForm,
}) => {
  const [expand, setExpand] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (event) => {
    event.stopPropagation()
    if (!showForm) {
      setShowForm(true)
    } else if (username && password) {
      login({ variables: { username, password } })

      setShowForm(false)
      setUsername('')
      setPassword('')
    } else {
      setShowForm(false)
    }
  }

  const handleSort = () => {
    const copy = sortName.concat()
    copy.push(copy.shift())
    setSortName(copy)
  }
  if (notification) {
    return <Notification notification={notification} />
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={() => setShowForm(false)}>
          <Link to="/events">
            <strong>DrANK</strong>
          </Link>
        </div>
        {!token && (
          <nav>
            <ul>
              <li onClick={signIn}>Sign In</li>
              <Link to="/register">
                <li onClick={() => setShowForm(false)}> Sign Up</li>
              </Link>
            </ul>
          </nav>
        )}
        {token && (
          <nav>
            <ul className="nav-events-wrapper">
              <Link to="/events">
                <li>Events</li>
              </Link>
              <Link to="/myevents">
                <li>My Events</li>
              </Link>
              <Link to="/createevent">
                <li>Create Event</li>
              </Link>
              <li onClick={() => handleSort()}>{sortName[0]}</li>
            </ul>
          </nav>
        )}
        {token && (
          <nav>
            <ul>
              <li onClick={signOut}>Sign Out</li>
            </ul>
          </nav>
        )}
      </div>

      {showForm && (
        <form className={showForm ? 'login-form' : null}>
          <div>
            <input
              value={username}
              placeholder="username"
              onChange={({ target }) => setUsername(target.value)}
            ></input>
          </div>
          <div>
            <input
              value={password}
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
              type="password"
            ></input>
          </div>
        </form>
      )}
      <div className="navbar-collapsed navbar-collapsed-main">
        <div onClick={() => setShowForm(false)}>
          <Link to="/events">
            <strong>DrANK</strong>
          </Link>
        </div>
        {!token && (
          <nav>
            <ul>
              <li onClick={signIn}>Sign In</li>
              <Link to="/register">
                <li onClick={() => setShowForm(false)}> Sign Up</li>
              </Link>
            </ul>
          </nav>
        )}
        {token && (
          <nav
            onClick={() => {
              setShowFilter(false)
              setExpand(!expand)
            }}
          >
            EXPAND
          </nav>
        )}
      </div>
      {expand && (
        <ul
          className={expand ? 'navbar-collapsed nav-collapsed-wrapper' : null}
        >
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/myevents">
            <li>My Events</li>
          </Link>
          <Link to="/createevent">
            <li>Create Event</li>
          </Link>
          <li onClick={() => handleSort()}>{sortName[0]}</li>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <li onClick={() => setShowFilter(!showFilter)}>Filter</li>
          <li onClick={signOut}>Sign Out</li>
        </ul>
      )}
      {showFilter && (
        <div
          className={
            showFilter ? 'navbar-collapsed nav-collapsed-filter' : null
          }
        >
          <Filter
            type={type}
            setType={setType}
            period={period}
            setPeriod={setPeriod}
            drinksArr={drinksArr}
            drinks={drinks}
            setDrinks={setDrinks}
            buttonClass="collapsed-filter-button"
            dateClass="collapsed-filter-dates"
            checkBoxClass="collapsed-filter-checkboxes"
            drinksClass="collapsed-filter-drinks"
          />
          <button
            className="collapsed-filter-button"
            onClick={() => setShowFilter(false)}
          >
            Done
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
