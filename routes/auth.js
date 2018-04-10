const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost:27017/mean-socket')
  .then(
    ()=>console.log('Connected'),
    ()=>console.log(`Couldn't connect`)
  )

router.post('/signup', (req, res, next) => {
  let user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  })

  user.save((err, result) => {
    if(err) {
      console.log(`Error: ${err}`)
      res.status(500).json(err);
    }
    console.log(`user.save result: ${result}`)
    res.status(201).json(result)
  })
})

router.post('/login', (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log(user)
    if(err) {
      res.status(500).json(err)
    }
    if(!user) {
      res.status(500).json('User not found')
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
      res.status(500).json('Invalid password')
    }
    let token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 })
    res.json({
      messege: 'Successfully logged in',
      token: token,
      username: user.username,
      userId: user._id
    })
  })
})

router.get('/getUser/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if(err) {
      res.status(500).json(err)
    }
    res.json(user)
  })
})

module.exports = router