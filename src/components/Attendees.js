import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { FIND_EVENT } from '../queries'

const Attendees = () => {
  const id = useParams().id

  const [showProfile, setShowProfile] = useState(null)

  const eventInfo = useQuery(FIND_EVENT, {
    variables: { eventId: id },
  })
  if (eventInfo.loading) return <div>LOADING</div>

  if (eventInfo.error) return <div>ERROR</div> //make this better

  const event = eventInfo.data.findEvent

  if (!showProfile) {
    return (
      <div>
        <div className="attendees-container">
          People Going {event.max && <div>(max {event.maxGuests})</div>}
          <ul>
            {event.attendees.map((person) => (
              <li key={person.id}>
                <img
                  onClick={() => setShowProfile(person)}
                  src={person.pic}
                  alt={person.username}
                  className="attendee-pic"
                ></img>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="profile">
      <h3>{showProfile.username}</h3>
      <img
        src={showProfile.pic}
        alt="profile pic"
        className="profile-pic"
      ></img>
      <div>{showProfile.drink}</div>
      <button
        className="button filter-button"
        onClick={() => setShowProfile(null)}
      >
        back
      </button>
    </div>
  )
}

export default Attendees
