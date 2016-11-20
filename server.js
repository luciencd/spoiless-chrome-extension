'use strict';

const express = require('express');

// Constants
const PORT = 7777;

// App
const app = express();

const path = require('path');

/*app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname + '/html/popup.html'));

});*/

/*app.get('/html/',function(req,res){
  res.sendFile(path.join(__dirname + '/html/'));
});*/
app.use("/", express.static(__dirname + '/'));
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
