const express = require('express')
const indexController = require('../controllers/index.controller')

module.exports = app => {
      app.get('/',indexController.index)

      app.get('/signup',indexController.signupPageRender )

      app.post('/api/signup/process',indexController.signupProcess)

      app.get('/login',indexController.loginPageRender)

      app.post('/api/login/process', indexController.loginProcess)
      
}