import React, { useState, useEffect } from 'react'

const Register = ({ createUser, history, createResult }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [pic, setPic] = useState('')
  const [drink, setDrink] = useState('')

  useEffect(() => {
    setUsername('')
    setPassword('')
    setPassword('')
    setPassword('')
  }, [])

  const signUp = async (event) => {
    event.preventDefault()
    createUser({ variables: { username, password, pic, drink } })
  }

  return (
    <div className="create-event-container">
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
