'use strict';

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({
    handlebars: handlebars
}));

// Set the public directory and paths
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'public/components')));

// Serve media files from the "media" directory
app.use(express.static(path.resolve(__dirname, 'media')));


const SEVER_PORT = 3000;


// GET route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
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