const express = require('express')
var session = require('express-session');
var myParser = require("body-parser");
const app = express()
const port = 4000
//var cookieParser = require('cookie-parser');
//app.use(cookieParser());
app.use(session({secret: 'ssshhhhh'}));
/*app.get('/', (req, res) => {
    if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
    
    return res.send('This is page is getting ready. It may take some time.');
    
})*/
app.get('/', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });
var connection = require('./db/config'); 
var authenticateController=require('./login_module/authenticate-user');
var registerController=require('./login_module/register-controller');
var dashboardController=require('./dashboardController.js');
var logoutController=require('./logout.js');
const json = {
    hello: 'World'
};

app.get('/home', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.stringify(json));
})

app.use(myParser.urlencoded({ extended: true }));
app.use(myParser.json());

app.post('/register',registerController.register);
app.post('/authenticate',authenticateController.authenticate);

app.get('/dashboard',dashboardController.dash);
app.get('/logout',logoutController.logout);

/*app.post('/login', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    console.log("request : ", typeof request.body);
    console.log("adadad");
    if ((request.body.name == 'prithvi' || request.body.name == 'chandu') && request.body.password == 'testing') 
    {
        return response.send(JSON.stringify({
            data: {
                ...request.body,
                token: 'qwerty123',
            },
            status: 200,
            message: 'success',
        }));
    }
    return response.send(JSON.stringify({
        errorMessage: 'invalied login credentials',
    }));
});
*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`))