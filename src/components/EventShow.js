import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import BigButton from './BigButton'
import { FIND_EVENT, USER_INFO } from '../queries'

const EventShow = ({ token, setNotify }) => {
  const id = useParams().id

  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  const userInfo = useQuery(USER_INFO)

  if (eventInfo.loading || userInfo.loading) return <div>LOADING</div>

  if (eventInfo.error || userInfo.error) return <div>ERROR</div> //make this better

  const event = eventInfo.data.findEvent
  const user = userInfo.data.me

  const date = new Date(event.eventDate)

  const descCont = { display: 'flex', justifyContent: 'center' }
  const showContainer = { display: 'flex', justifyContent: 'center' }
  // const eventAlign = {  justifyContent: 'center' }

  return (
    <div style={showContainer}>
      <div className="event">
        <div className="event-info-top">
          <p style={{ fontSize: '100px' }}>{event.title}</p>
        </div>
        <img src={event.eventPic} alt="event" className="event-pic"></img>
        <div className="event-info-bottom">
          <div>{event.eventType}</div>
          <div>{event.location}</div>
          <div>
            <div>{date.toLocaleDateString()}</div>
            <div>{date.toLocaleTimeString()}</div>
          </div>
        </div>
        <div style={descCont}>
          <div className="event-description">{event.description}</div>
        </div>
        <BigButton event={event} user={user} setNotify={setNotify} />
      </div>
    </div>
  )
}

export default EventShow
