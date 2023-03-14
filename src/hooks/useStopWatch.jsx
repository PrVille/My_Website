import { useState, useEffect } from "react"

const useStopWatch = () => {
  const [time, setTime] = useState(
    new Date().getTime() - new Date("2019-12-31T00:00:00").getTime()
  )
  
  useEffect(() => {
    let interval = null

    interval = setInterval(() => {
      setTime((time) => time + 1000)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const z = new Date(time)
  const epoch = new Date("1970-01-01 00:00:00-0600")
  const years = z.getYear() - epoch.getYear()
  const months = z.getMonth() - epoch.getMonth()
  const days = z.getDate() - epoch.getDate()
  const hours = z.getHours() - epoch.getHours()
  const minutes = z.getMinutes() - epoch.getMinutes()
  const seconds = z.getSeconds() - epoch.getSeconds()

  return { years, months, days, hours, minutes, seconds }
}

export default useStopWatch
