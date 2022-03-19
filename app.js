const express = require('express');
const app = express();

app.get('/', (req, res)=> {//router handler
    res.send('Hello World, this is the root rute');
});


app.listen(3000);
app.get('/uno', (req, res)=> {//router handler
    res.send('Hello World, from route One');
});