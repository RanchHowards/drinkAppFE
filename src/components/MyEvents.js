import React from 'react'

import MyEvent from './MyEvent'
import { useQuery } from '@apollo/client'
import { USER_INFO } from '../queries'

const MyEvents = ({ token }) => {
  const { data, loading, error } = useQuery(USER_INFO)

  if (loading) {
    return <div>LOADING</div>
  }

  if (error) {
    return <div>ERROR: {error}</div>
  }
  const userInfo = data.me

  return (
    <div>
      <ul className="events-container">
        {userInfo.myEvents?.map((event) => {
          return (
            <li className="event" key={`myevent ${event.id}`}>
              <MyEvent event={event} token={token} userInfo={userInfo} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MyEvents
