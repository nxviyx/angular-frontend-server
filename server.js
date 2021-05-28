//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();

app.use(cors({origin: true, credentials: true, methods: 'POST,GET,PUT,OPTIONS,DELETE'}))

 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
   next();
})

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-frontend-server'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-frontend-server/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);