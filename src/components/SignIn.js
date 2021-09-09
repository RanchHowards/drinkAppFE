import React, { useState } from 'react'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (event) => {
    event.preventDefault()
    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <form onSubmit={handleSignIn}>
        username
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        ></input>
        password
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
        ></input>
        <button type="submit">sign in</button>
      </form>
    </div>
  )
}

export default SignIn
