import React, { useState } from 'react'

const Register = ({ createUser, history }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [pic, setPic] = useState('')
  const [drink, setDrink] = useState('')

  const signUp = (event) => {
    event.preventDefault()
    createUser({ variables: { username, password, pic, drink } })
    setUsername('')
    setPassword('')
  }

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2 style={{ margin: '0 0 10px 0' }}>Register</h2>
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
          <label>
            Pic
            <input
              value={pic}
              placeholder="pic"
              onChange={({ target }) => setPic(target.value)}
            ></input>
          </label>
          <label>
            Drink of Choice
            <input
              value={drink}
              placeholder="drink"
              onChange={({ target }) => setDrink(target.value)}
            ></input>
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
