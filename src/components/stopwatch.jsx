import { useRef, useState } from 'react'

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)
  let secondsPassed = 0

  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  return (
    <div className='flex flex-col gap-3 border p-3'>
      <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
      <div>
        <button className='mr-3' onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  )
}