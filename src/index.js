import React from 'react'
import ReactDOM from 'react-dom'
import H264Feed from './H264Feed'

ReactDOM.render(<H264Feed url={process.env.SOCKET_URL}/>, document.getElementById('root'))
