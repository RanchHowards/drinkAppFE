import React, { useState } from 'react'

const Filter = ({
  type,
  setType,
  period,
  setPeriod,
  drinksArr,
  drinks,
  setDrinks,
  buttonClass,
  dateClass,
  drinksClass,
  checkBoxClass,
}) => {
  const d = new Date()
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)

  // const type = useReactiveVar(typeDataVar)

  // const e = useReactiveVar(eventsArrVar)

  // useEffect(() => {
  //   eventsArrFilterVar([...eventsArrVar()])
  // }, [eventsArrVar()])
  // //TYPE OF LOCATION FOR EVENT
  // useEffect(() => {
  //   console.log(e)
  //   const eventsFilter = !type.length
  //     ? e
  //     : e.filter((event) => type.includes(event.eventType))
  //   eventsArrFilterVar([...eventsFilter])
  // }, [type]) //eslint-disable-line

  const [button, setButton] = useState('all')

  const today = () => {
    setButton('today')
    setPeriod(date)
  }
  const week = () => {
    const week = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7)
    setButton('week')
    setPeriod(week)
  }

  const handleType = (value) => {
    if (type.includes(value)) {
      setType(type.filter((t) => t !== value))
    } else setType(type.concat(value))
  }

  const handleDrink = (value) => {
    if (drinks.includes(value)) {
      setDrinks(drinks.filter((d) => d !== value))
    } else setDrinks(drinks.concat(value))
  }

  const reset = () => {
    setButton('all')
    setPeriod(null)
    setType([])
    setDrinks([])
  }

  const buttonStyle = { backgroundColor: 'black', color: 'whitesmoke' }

  return (
    <>
      <div className={dateClass}>
        <button
          style={button === 'all' ? buttonStyle : null}
          className={'filter-button ' + buttonClass}
          value={null}
          onClick={({ target }) => {
            setButton('all')
            setPeriod(target.value)
          }}
        >
          ALL
        </button>
        <button
          style={button === 'today' ? buttonStyle : null}
          className={'filter-button ' + buttonClass}
          onClick={() => today()}
        >
          Today
        </button>
        <button
          className={'filter-button ' + buttonClass}
          style={button === 'week' ? buttonStyle : null}
          onClick={() => {
            week()
          }}
        >
          This Week
        </button>
      </div>
      <div className={checkBoxClass}>
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
      <div className={drinksClass}>
        {drinksArr.map((d) => (
          <label key={d}>
            <input
              type="checkbox"
              value={d}
              checked={drinks.includes(d)}
              onChange={({ target }) => handleDrink(target.value)}
            ></input>
            {d}
          </label>
        ))}
      </div>

      <button
        className={'filter-button ' + buttonClass}
        onClick={() => reset()}
      >
        Reset
      </button>
    </>
  )
}

export default Filter
