'use strict';

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({
    handlebars: handlebars
}));

// Set the static directory and paths
app.use(express.static(path.join(__dirname, '..', '/static')));

// Serve media files from the "media" directory
// app.use(express.static(path.resolve(__dirname, '..', 'media'))); // with media in path
app.use(express.static(path.resolve(__dirname, '..'))); // without media in path


const SEVER_PORT = 3000;


// GET route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});



// app.get('/feed', (req, res) => {
//     const result = Object
//         .values(users)
//         .filter(({email}) => email !== emailSession)
//         .map(user => user.images)
//         .filter(Boolean)
//     ;
//
//     res.json(result.flat());
// });

const port = process.env.PORT || SEVER_PORT;

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});