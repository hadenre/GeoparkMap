// Dependency Files
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var passport = require('passport');
var session = require('express-session');
//var mongoose = require('mongoose');
var mongoose = require('mongodb').mongoose;

//const { mongoose } = require('mongodb');
// var cors = require('cors');
// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

var dotenv = require('dotenv');
dotenv.config();

var port = process.env.PORT;
var mongoURI = process.env.MONGO_URI;

//var port = process.env.PORT || 3000;
//var mongoURI = process.env.mongoURI || 'mongodb://localhost:27017/geopark';

//App settings for public files and json formatting
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
//app.use(cors(corsOptions));
app.use(express.static('www'));


//App Settings for Hanblebars Template engine
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

//Authenticaton Dependancies and session settings
require('./middleware/passport')(passport);
app.use(
    session({
        secret: process.env.secret,
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 6000000 }
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', require('./routes'));
app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api'));

//Initialise DB Conenction

mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the DB');
})
    .catch((err) => {
        console.log('Not connected to the DB with err: ' + err);
    });
 
});

/*
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the DB');
})
    .catch((err) => {
        console.log('Not connected to the DB with err: ' + err);
    });
*/
//Initialise HTTP server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
