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
    <div className="create-event-container">
      {/* <h2 style={{ margin: '0 0 10px 0' }}>Register</h2> */}
      <form className="registration-form" onSubmit={signUp}>
        <input
          value={username}
          placeholder="username"
          required
          onChange={({ target }) => setUsername(target.value)}
        ></input>
        <input
          value={password}
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
          required
          type="password"
        ></input>

        <input
          value={pic}
          placeholder="pic"
          onChange={({ target }) => setPic(target.value)}
        ></input>
        <input
          value={drink}
          placeholder="drink"
          required
          onChange={({ target }) => setDrink(target.value)}
        ></input>
        <button className="button register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
