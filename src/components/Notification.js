import React from 'react'

const Notification = ({ notification }) => {
  return (
    <div className="navbar">
      <div className="navbar-error">
        <div>{notification}</div>
      </div>
    </div>
  )
}

export default Notification
