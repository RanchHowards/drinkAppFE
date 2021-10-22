import React, { useState } from 'react'
import { eventsArrVar } from '../cache'

const Sort = () => {
  const [sortName, setSortName] = useState([
    'Sort',
    'New',
    'Old',
    'Sooner',
    'Later',
  ])

  const sort = (exp) => {
    const copy = sortName.concat()
    copy.push(copy.shift())
    setSortName(copy)
    const eventsArr = eventsArrVar()
    switch (exp) {
      case 'Later':
        eventsArrVar([
          ...eventsArr.sort(
            (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
          ),
        ])
        break
      case 'Sooner':
        eventsArrVar([
          ...eventsArr.sort(
            (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
          ),
        ])

        break
      case 'Old':
        eventsArrVar([
          ...eventsArr.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          ),
        ])

        break
      case 'New':
        eventsArrVar([
          ...eventsArr.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          ),
        ])

        break
      default:
        eventsArrVar([
          ...eventsArr.sort(
            (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
          ),
        ])
        break
    }
  }
  //   const filterButtons = {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     margin: '0 3em',
  //     zIndex: '3',
  //   }

  //   const button = {
  //     height: '2em',
  //     width: '2em',
  //   }

  return (
    <li onClick={() => sort(sortName[1])}>
      {sortName[0]}
      {/* <div style={filterButtons}>
        <div>
          Created
          <button style={button} onClick={() => sort('old')}>
            ⇧
          </button>
          <button style={button} onClick={() => sort('new')}>
            ⇩
          </button>
        </div>
        <div>
          Date
          <button style={button} onClick={() => sort('later')}>
            ⇧
          </button>
          <button style={button} onClick={() => sort('sooner')}>
            ⇩
          </button>
        </div>
      </div> */}
    </li>
  )
}

export default Sort
