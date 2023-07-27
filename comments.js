//create web server
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

//get request from client
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

//post request from client
app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
      name:req.body.name,
      comment:req.body.comment
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

//create server
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   //print on console
   console.log("Example app listening at http://%s:%s", host, port)

})