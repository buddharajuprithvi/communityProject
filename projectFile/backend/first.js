const express = require('express')
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))