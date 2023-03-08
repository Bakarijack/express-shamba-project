const express = require('express')
const indexController = require('../controllers/index.controller')

const index_router = express.Router()

index_router.route('/')
      .get(indexController.index)


module.exports = index_router      