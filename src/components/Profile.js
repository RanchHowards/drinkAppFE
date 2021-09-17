import { useQuery } from '@apollo/client'
import React from 'react'
import { USER_INFO } from '../queries'

const Profile = () => {
  const { data, loading, error } = useQuery(USER_INFO)

  if (loading) {
    return <div>LOADING</div>
  }
  if (error) {
    return <div>ERROR: {error.message}</div>
  }

  return <div>{data.me.username}</div> // insert ?s before the dots to allow for the code to proceed if nothing is found
}

export default Profile
