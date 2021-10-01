import React from 'react'
import { FIND_EVENT, USER_INFO } from '../queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'

const Host = () => {
  const id = useParams().id
  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  const userInfo = useQuery(USER_INFO)

  if (eventInfo.loading || userInfo.loading) {
    return <div>LOADING</div>
  }
  if (eventInfo.loading || userInfo.loading) {
    return <div>ERROR</div>
  }

  const { host } = eventInfo.data.findEvent

  return (
    <div className="profile">
      <div>
        {host.id === userInfo.data.me.id ? "You're hosting!" : 'hosted by:'}
      </div>
      <h3>{host.username}</h3>
      <img src={host.pic} alt="profile pic" className="profile-pic"></img>
      <div>{host.drink}</div>
    </div>
  )
}

export default Host
