const express = require('express');
const mongoose = require('mongoose');


// express app
const app = express();

// connect to db
const dbURI = 'mongodb+srv://tony:tonycsd123@cluster0.7c8vm29.mongodb.net/photo_gallery?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to photo gallery db');
        
        // listen for incoming requests
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// routes
app.get('/', (req, res) => {
    res.render('index');
})