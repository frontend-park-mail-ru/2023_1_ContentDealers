'use strict';

const express = require('express');
const path = require('path');

const app = express();

const SEVER_PORT = 3000;
const port = process.env.PORT || SEVER_PORT;

// app.use(express.static(path.join(__dirname, '..', '/static')));
app.use(express.static(path.resolve(__dirname, '..'))); // without media in path


// GET route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});
