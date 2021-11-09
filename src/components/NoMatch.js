import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  const noMatch = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <div style={noMatch}>
      <h3>Not sure what you're looking for...</h3>
      <h4>but it ain't here</h4>
      <Link to="/events">
        <button className="button filter-button">EXIT</button>
      </Link>
    </div>
  )
}

export default NoMatch
