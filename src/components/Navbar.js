import React, { useState } from 'react'

const Navbar = ({ login, createUser, signOut, token }) => {
  const [showForm, setShowForm] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (event) => {
    event.stopPropagation()
    if (!showForm) {
      setShowForm(true)
    } else {
      login({ variables: { username, password } })

      setShowForm(false)
      setUsername('')
      setPassword('')
    }
  }
  const signUp = (event) => {
    event.stopPropagation()
    if (!showForm) {
      setShowForm(true)
    } else {
      createUser({ variables: { username, password } })
      setShowForm(false)
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <strong>DrANK</strong>
        </div>
        {!token && (
          <nav>
            <ul>
              <li onClick={signIn}>Sign In</li>
              <li onClick={signUp}> Sign Up</li>
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
    </div>
  )
}

export default Navbar
