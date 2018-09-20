var express=require('express');
var connection = require('./db/config.js');
var session = require('express-session');
var myParser = require("body-parser");
const app = express()

app.use(session({secret: 'ssshhhhh'}));