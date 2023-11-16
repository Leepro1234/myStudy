'use client'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')
  const [currentCount, setCurrentCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')

      const formattedTime = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`
      setCurrentTime(formattedTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const clicker = () => {
    setCurrentCount(count => count + 1)
  }
  return (
    <div>
      <h1 className="title">서버시간</h1>
      <div className="timebody">
        <input
          type="text"
          className="searchtxt"
          placeholder="http://naver.com"
        />
        <button className="btn" onClick={clicker}>
          조회하기
        </button>
      </div>

      <div className="timeview">
        <span>{currentTime}</span>
      </div>

      <div className="timeview">
        <span>{currentCount}</span>
      </div>
    </div>
  )
}
