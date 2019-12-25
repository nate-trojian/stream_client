# Stream Client
## Overview
This application is meant to function as a simple viewer for H264 Video Streaming using [Socket.IO](https://socket.io/).
It uses the [broadway-player](https://www.npmjs.com/package/broadway-player) package as the video decoder.

## Usage
To run this application, run:

`npm start`

It will currently only tries to connect to a local Socket.IO server on port 4001.
But the next step is to make it read from an environment variable.

## TODO
1. Add environment variable input for url ([like they did here](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5))
1. Containerize example
1. NPM Package?
