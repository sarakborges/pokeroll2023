export const getDate = (date: Date, type?: 'date' | 'time', text?: boolean) => {
  const day = `0${date.getDate()}`.slice(-2)
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = date.getFullYear()

  const hours = `0${date.getHours()}`.slice(-2)
  const minutes = `0${date.getMinutes()}`.slice(-2)

  const dateText = `${text ? 'em ' : ''} ${day}/${month}/${year}`
  const timeText = `${text ? 'às ' : ''} ${hours}:${minutes}`

  switch (type) {
    case 'date': {
      return dateText
    }

    case 'time': {
      return timeText
    }

    default: {
      return `${dateText} ${timeText}`
    }
  }
}
