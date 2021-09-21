import React from 'react'
import { USER_INFO } from '../queries'
import { useQuery } from '@apollo/client'

const Profile = ({ userInfo }) => {
  const { loading, error, data } = useQuery(USER_INFO)
  if (loading) {
    return <div>LOADING</div>
  }
  if (error) {
    return <div>ERROR: {error.message}</div>
  }

  return (
    <div className="profile">
      <h3>{data.me.username}</h3>
      <img src={data.me.pic} alt="profile pic" className="profile-pic"></img>
      <div>{data.me.drink}</div>
    </div>
  ) // insert ?s before the dots to allow for the code to proceed if nothing is found
}

export default Profile
