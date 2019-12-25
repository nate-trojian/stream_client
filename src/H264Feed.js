import React, { useRef, useEffect } from 'react'
import Player from 'broadway-player/Player/Player'
import useSocketConn from './SocketConn'

let H264Feed = ({ url }) => {
  const socket = useSocketConn(url)
  const p = new Player({
    useWorker: false
  })
  const canvasEl = useRef(null)
  useEffect(() => {
    if(socket) {
      socket.on('video_out', (data) => {
        p.decode(data)
      })
      canvasEl.current.appendChild(p.canvas)
    }
  }, [socket])
  return (
    <div ref={canvasEl}>
    </div>
  )
}

export default H264Feed
