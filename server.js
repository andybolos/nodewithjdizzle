//***************  Dependencies  **************//

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

//***************  Creating app by invoking express()  **************//

var app = express();
var port = 9393;

//*************  Middleware  *************//

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//*************  Endpoints  **************//

app.get('/api/message', function(req, res) {
    return res.send({"message": "Hello World!!"});
});

app.post('/api/send_text_message', function(req, res) {
    console.log(req.body.message);
    res.send();
});






app.listen(port, function() {
    console.log("I'm watching you, you are using port", port);
});
