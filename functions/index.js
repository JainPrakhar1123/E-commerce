

const {onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");


const express=require("express");

const cors=require("cors");
const stripe=require("stripe")('sk_test_51N94TxSIB00YYXT68QfzE8KyQftE2LdTIam0td52LQ8fr00yfWgTIt42HhbGVRjfdhrVrgWMyMHrNHhaIeUAlMOh003P5hfurd')

//API

//App config
const app=express();
//Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//Api routes
app.get('/',(req,res)=>res.status(200).send("hello world"));
//Listen command
exports.api=functions.https.onRequest(app);


// http://127.0.0.1:5001/clone-fa9c5/us-central1/api