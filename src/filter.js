export const filter = (e, type, period, drinks, exp) => {
  //TYPE OF LOCATION FOR EVENT
  const eventsCopy1 = !type.length
    ? e
    : e.filter((event) => type.includes(event.eventType))

  let d = new Date()
  const todaysDate = new Date(d.getFullYear(), d.getMonth(), d.getDate())

  //TIME PERIOD - TODAY OR THIS WEEK
  const eventsCopy2 = !period
    ? eventsCopy1
    : eventsCopy1
        .filter((event) => new Date(event.eventDate) >= todaysDate)
        .filter((event) => new Date(period) - new Date(event.eventDate) >= 0)
  //TYPE OF DRINK
  let eventsCopy3 = !drinks.length
    ? eventsCopy2
    : eventsCopy2.filter((event) => drinks.includes(event.host.drink))

  let arr = [...eventsCopy3]

  return sort(arr, exp)
}

const sort = (arr, exp) => {
  switch (exp) {
    case 'Later':
      arr.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate))
      break
    case 'Sooner':
      arr.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
      break
    case 'Old':
      arr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      break
    case 'New':
      arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      break
    default:
      arr.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate))
  }
  return arr
}
