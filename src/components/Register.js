import React, { useState } from 'react'

const Register = ({ createUser, history }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (event) => {
    event.stopPropagation()
    createUser({ variables: { username, password } })
    setUsername('')
    setPassword('')
    history.push('/')
  }

  return (
    <div>
      Register
      <form onSubmit={signUp}>
        <label>
          Username
          <input
            value={username}
            placeholder="username"
            onChange={({ target }) => setUsername(target.value)}
          ></input>
        </label>
        <label>
          Password
          <input
            value={password}
            placeholder="password"
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          ></input>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  ) // insert ?s before the dots to allow for the code to proceed if nothing is found
}

export default Register
