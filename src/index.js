const express = require('express')
const path = require('path')
const hbs = require('hbs')
var admin = require('firebase-admin');

const app = express()
const port = process.env.port || 5000

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.json())

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

/* Pass object with longitude and latitude as properties */
app.get('', (req, res) => {
    res.render('index')
})

/* Uber for Garbage */
app.get('/ufg', (req, res) => {
    res.render('uber')
})

app.get('/report', (req, res) => {
    res.render('report')
})

app.listen(port, () => {
    console.log('Server is up on port:', port)
})

