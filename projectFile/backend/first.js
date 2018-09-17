const express = require('express')
var myParser = require("body-parser");
const app = express()
const port = 4000

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

const json = {
    hello: 'World'
};

app.get('/home', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.stringify(json));
})

app.use(myParser.urlencoded({ extended: true }));
app.use(myParser.json());

app.post('/login', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    console.log("request : ", typeof request.body);
    if ((request.body.name == 'prithvi' || request.body.name == 'chandu') && request.body.password == 'testing') {
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))