var express=require('express');
var connection = require('./db/config.js');
var session = require('express-session');
var myParser = require("body-parser");
const app = express()

app.use(session({secret: 'ssshhhhh'}));

module.exports.logout=function(req,res){
    if(req.session.page_views)
    {
    req.session.destroy();
    return res.send("Logged out");
    }
    else
    {
        return res.send("No active session");
    }
    
    
}