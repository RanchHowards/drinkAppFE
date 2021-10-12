import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Notification from './Notification'

const Navbar = ({ login, signOut, token, notification }) => {
  const [showForm, setShowForm] = useState(false)
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
    </nav>
  )
}

export default Navbar
