import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import BigButton from './BigButton'
import Comments from './Comments'
import { FIND_EVENT, USER_INFO } from '../queries'

const EventShow = ({ token, setNotify }) => {
  const id = useParams().id

  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  const userInfo = useQuery(USER_INFO)

  if (eventInfo.loading || userInfo.loading) return <div>LOADING</div>

  if (eventInfo.error || userInfo.error)
    return (
      <div>
        ERROR{' '}
        {eventInfo.error ? eventInfo.error.message : userInfo.error.message}
      </div>
    )

  const event = eventInfo.data.findEvent
  const user = userInfo.data.me

  const going = !event.attendees.every((person) => person?.id !== user?.id)

  const date = new Date(event.eventDate)

  const descCont = { display: 'flex', justifyContent: 'center' }
  const showContainer = { display: 'flex', justifyContent: 'center' }

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
            <div style={{ textAlign: 'center' }}>
              {date.toLocaleTimeString().slice(0, 5)}
            </div>
          </div>
        </div>
        <div style={descCont}>
          <div className="event-description">{event.description}</div>
        </div>
        <BigButton
          event={event}
          user={user}
          setNotify={setNotify}
          going={going}
        />
        <Comments going={going} event={event} />
      </div>
    </div>
  )
}

export default EventShow
