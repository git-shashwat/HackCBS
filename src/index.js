const express = require('express')
const path = require('path')
const hbs = require('hbs')
var admin = require('firebase-admin');
const serviceAccount = require('../hackcbs-fire-firebase-adminsdk-6viz8-f4380eca65.json')

const app = express()
const port = process.env.port || 5000

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

/* Firebase Configuration */
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
var db = admin.database();
var ref = db.ref("https://console.firebase.google.com/project/hackcbs-fire/database/hackcbs-fire/data")

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

app.use(express.json())

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Server is up on port:', port)
})

