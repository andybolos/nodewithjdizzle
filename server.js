//***************  Dependencies  **************//

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');


//***************  Creating app by invoking express()  **************//

var app = express();
var port = 9393;

//*************  Middleware  *************//

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//*************  Auth  **************//

var accountSid = '';
var authToken = '';

var client = require('twilio')(accountSid, authToken);

//****************************************//
//*************  Endpoints  **************//
//****************************************//


//************  GET request  *************//

app.get('/api/message', function(req, res) {
    return res.send({"message": "Hello World!!"});
});

//************  POST request  ************//

app.post('/api/send_text_message', function(req, res) {
    console.log(req.body.message);

    //************  Send sms from twilio client  *************//

    client.messages.create({
        to: '4356686406',
        from: '+14352169429',
        body: req.body.message
    }, function(err, message) {
        console.log(message.sid);
    });

    // request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-0/Accounts/' + accountSid + '/Messages.json')

    res.send();
});








app.listen(port, function() {
    console.log("I'm watching you, you are using port", port);
});
