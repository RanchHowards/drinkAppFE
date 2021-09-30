import React from 'react'

const Notification = ({ notification }) => {
  return (
    <div className="navbar">
      <div className={notification.type}>{notification.message}</div>
    </div>
  )
}

export default Notification
