import { useEffect, useState } from 'react'

const LA_TZ = 'America/Los_Angeles'

export default function useLAClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: LA_TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: LA_TZ,
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  })

  return {
    time: formatter.format(now),
    date: dateFormatter.format(now),
  }
}
