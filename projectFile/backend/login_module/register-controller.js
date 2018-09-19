var Cryptr = require('cryptr');
var express=require('express');
var connection = require('../db/config');
cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
    /*var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":"ds"
        //"created_at":today,
        //"updated_at":today
    }*/
    var name=req.body.name;
    var email=req.body.email;
    var password=encryptedString;
    var insertSql = "INSERT INTO users (first_name, email,password) VALUES ('"+name+"', '"+email+"','"+password+"')";
    connection.query(insertSql, function (error, results) {
    if (error) {
        res.json({
            status:false,
            message:"Registration failed"
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'User registered sucessfully'
        })
      }
    });
}