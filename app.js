const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const port = 8000;
dotenv.config({path:'./.env'});

// detecting the device from where the request sent
var device = require('express-device');
app.use(device.capture());


app.set('view engine','hbs');


// parse requests of contenttype: application/json
app.use(bodyParser.json());
// initializing cookies
app.use(cookieParser());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));


const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));


app.use('/stylesheets',express.static(__dirname + 'public/stylesheets'));
app.use('/javascripts',express.static(__dirname + 'public/javascripts'));
app.use('/images',express.static(__dirname + 'public/images'));

//difine routes
app.use('/',require('./Routes/pages'));

// set port, listen for requests
app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port 8000.");
    });

