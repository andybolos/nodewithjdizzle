//***************  Dependencies  **************//

var express = require('express');
var bodyParser = require('body-parser');

//***************  Creating app by invoking express()  **************//

var app = express();
var port = 9393;






app.listen(port, function() {
    console.log("I'm watching you, you are using port", port);
});
