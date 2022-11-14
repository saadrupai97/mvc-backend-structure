const express = require("express");

const app = new express();

const router = require("./routes/api");

const helmet = require('helmet');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
// const { default: mongoose } = require('mongoose');


// security middlewares
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(mongoSanitize());
app.use(xss);
app.use(hpp());


//middlewares
app.use(bodyParser.json());

//request rate limiting
const limiter = rateLimit({
    windows: 15*60*1000, //15 minutes
    max: 100 // limit each IP to 100 requests per window
});
app.use(limiter);


//mongoose db connection
let URI = "mongodb://127.0.0.1:27017/school"
let options = {user:"", pass:""}
mongoose.connect(URI, options, (err)=>{
    console.log("Connected to DB");
    if(err){
        console.log(err);
    }
})


app.use("/api/v1",router);


//undefined route
app.use("*", (req,res)=>{
    res.status(404).json({status:"Fail", data:"not found"});
});

module.exports=app;


