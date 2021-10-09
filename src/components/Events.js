import React from 'react'
import Event from './Event'
import { useQuery } from '@apollo/client'
import { USER_INFO } from '../queries'

const Events = ({ token, eventsInfo, setNotify }) => {
  const userInfo = useQuery(USER_INFO)

  // if (eventsInfo.loading || userInfo.loading) {
  //   return <div>LOADING</div>
  // }

  // if (eventsInfo.error) {
  //   return <div>ERROR: {eventsInfo.error}</div>
  // }

  const copy = [...eventsInfo] //had to create a copy in order to get the SORT method to work
  const events = copy.sort(
    (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
  )
  const user = userInfo?.data?.me

  return (
    <div>
      <ul className="events-container">
        {events?.map((event) => {
          return (
            <li className="event" key={event.id}>
              <Event
                event={event}
                token={token}
                user={user}
                setNotify={setNotify}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Events
