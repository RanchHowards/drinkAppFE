import React from 'react'

const Filter = ({ type, setType, setPeriod }) => {
  const today = () => {
    let d = new Date()
    d.setHours(23)
    d.setMinutes(59)
    d.setSeconds(59)
    return d
  }
  const week = new Date(today().setDate(today().getDate() + 6))

  const handleType = (value) => {
    if (type.includes(value)) {
      setType(type.filter((t) => t !== value))
    } else setType(type.concat(value))
  }
  return (
    <>
      <div>
        <button value={null} onClick={({ target }) => setPeriod(target.value)}>
          ALL
        </button>
        <button
          value={today()}
          onClick={({ target }) => setPeriod(target.value)}
        >
          Today
        </button>
        <button value={week} onClick={({ target }) => setPeriod(target.value)}>
          This Week
        </button>
      </div>
      <div>
        <input type="checkbox" value="Bar" onClick={() => handleType('Bar')} />
        Bar
        <input
          type="checkbox"
          value="BYOB"
          onClick={() => handleType('BYOB')}
        />
        BYOB
        <input
          type="checkbox"
          value="Club"
          onClick={() => handleType('Club')}
        />
        Club
      </div>
    </>
  )
}

export default Filter
