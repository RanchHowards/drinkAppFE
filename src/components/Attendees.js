import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { FIND_EVENT } from '../queries'

const Attendees = () => {
  const id = useParams().id

  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  if (eventInfo.loading) return <div>LOADING</div>

  if (eventInfo.error) return <div>ERROR</div> //make this better

  const event = eventInfo.data.findEvent

  return (
    <div>
      <div className="attendees-container">
        People Going (Max {event.maxGuests})
        <ul>
          {event.attendees.map((person) => (
            <li key={person.id}>
              <img
                src={person.pic}
                alt="attendee"
                className="attendee-pic"
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Attendees
