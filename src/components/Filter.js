import React from 'react'

const Filter = ({ type, setType, setPeriod }) => {
  const d = new Date()
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
  const today = () => {
    setPeriod(date)
  }
  const week = () => {
    const week = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7)
    setPeriod(week)
  }

  const handleType = (value) => {
    if (type.includes(value)) {
      setType(type.filter((t) => t !== value))
    } else setType(type.concat(value))
  }

  return (
    <>
      <div>
        <button
          className="button filter-button"
          value={null}
          onClick={({ target }) => setPeriod(target.value)}
        >
          ALL
        </button>
        <button className="button filter-button" onClick={() => today()}>
          Today
        </button>
        <button className="button filter-button" onClick={() => week()}>
          This Week
        </button>
      </div>
      <div className="filter-checkboxes">
        <label>
          <input
            type="checkbox"
            value="Bar"
            checked={type.includes('Bar')}
            onChange={() => handleType('Bar')}
          />
          Bar
        </label>
        <label>
          <input
            type="checkbox"
            value="BYOB"
            checked={type.includes('BYOB')}
            onChange={() => handleType('BYOB')}
          />
          BYOB
        </label>
        <label>
          <input
            type="checkbox"
            checked={type.includes('Club')}
            value="Club"
            onChange={() => handleType('Club')}
          />
          Club
        </label>
      </div>
    </>
  )
}

export default Filter
