//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();

app.use(cors())

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-frontend-server'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-frontend-server/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);