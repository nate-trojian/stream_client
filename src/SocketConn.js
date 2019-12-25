import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

let useSocketConn = (url) => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const ret = io(url)
    ret.on('connect', () => {
      console.log("connected")
    })
    ret.on('disconnect', () => {
      console.log("disconnected")
    })
    setSocket(ret)
    return () => {
      ret.disconnect()
    }
  }, [url])
  return socket
}

export default useSocketConn
