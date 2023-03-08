const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const expressHandlebars = require('express-handlebars')
const indexRoutes = require('./routes/index.routes')


const app = express()

app.use(express.static('public'))

// set the view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

indexRoutes(app)

module.exports = app