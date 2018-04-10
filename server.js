const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.port || 7000
const authRoute = require('./routes/auth')
const http = require('http')
const server = http.createServer(app)
const socketIO = require('socket.io')
const io = socketIO(server)

io.on('connection', socket => {
  console.log('User connected')
  socket.on('clientMsg', msg => {
    io.emit('serverMsg', msg)
    console.log(msg)
  })

  socket.on('disconnect', ()=>console.log('User disconnected'))
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/auth', authRoute)

app.get('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
server.listen(port, ()=>console.log(`Server is running on port ${port}`))
