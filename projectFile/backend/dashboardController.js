var express=require('express');
var connection = require('./db/config.js');
var session = require('express-session');
var myParser = require("body-parser");
const app = express()

app.use(session({secret: 'ssshhhhh'}));

module.exports.dash=function(req,res){
    
    if (req.session.page_views) {
        res.send("Dashboard page views "+req.session.page_views);
    }
    else
    return res.send('Dashboard');

}