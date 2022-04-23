// init project
const express = require('express')

var app = express()

app.use(express.json())

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });

const timestampRoutes = require('./routes/timestamp')

app.use('/', timestampRoutes)

// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, () => {
  console.log("App is listening on port " + listener.address().port);
});
