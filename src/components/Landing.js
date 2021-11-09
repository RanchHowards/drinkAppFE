import React from 'react'
import { Link } from 'react-router-dom'

const Landing = ({ setShowForm, showForm }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>
        &#x1F942; Welcome to <strong>DrANK</strong> &#x1F37A;
      </h1>
      <Link to="register">
        <button className="button filter-button"> Sign Up </button>
      </Link>
      <br />
      <p id="already-drank" onClick={() => setShowForm(!showForm)}>
        already dRank?
      </p>
    </div>
  )
}

export default Landing
