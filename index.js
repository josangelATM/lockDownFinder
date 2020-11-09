const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Countries = require('./models/countries');
const methodOverride = require('method-override');
const Country = require('./models/countries');
const { count } = require('console');

//Connect to DB
mongoose.connect('mongodb://localhost:27017/lockDownFinderDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('Mongo Connection Open');
}).catch((err) => {
    console.log('Mongo error connection');
    console.log(err);
});

//Set Path for execute anywhere
app.set('views', path.join(__dirname, 'views'));

//Set Engine for templating
app.set('view engine', 'ejs');

//Set for enconde POST request
app.use(express.urlencoded({extended: true}));
//Override method for use PATH, PUT, DELETE.
app.use(methodOverride('_method'));

//Use CSS in the ejs file.
app.use("/styles",express.static(__dirname + "/styles"));


// /home route
app.get('/home', (req,res) => {
    console.log('One user just enter IP: ');
    console.log(req.ip);
    res.render('home');
})

// /:country route

app.get('/:country', async (req,res) =>{
    const { country } = req.params;
    const queriedCountry = await Country.findOne({ name: country});
    res.render('country', { queriedCountry });
})


app.listen(3000,() => {
    console.log('Server ON...');
})

