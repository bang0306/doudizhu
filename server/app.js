const socket = require('socket.io')
const app = socket('3000')

app.on('connection', function (socket) {
  console.log('a user connected')
  socket.emit('Welcome', 'Hello World')
  socket.on('login', function (data) {
    console.log('loginData Received: ' + JSON.stringify(data))
  })
})

