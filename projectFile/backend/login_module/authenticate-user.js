var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
var connection = require('../db/config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    var authenticateQuery = "SELECT * FROM users WHERE email ='"+email+"'";
    connection.query(authenticateQuery, function (error, results) {
      if (error) {
          res.json({
            status:false,
            message:'There are some error with query'
          })
      }else{
       
        if(results.length >0){
            decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })
            }
            else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}