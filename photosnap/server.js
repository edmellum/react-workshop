var fs = require('fs');
var http = require('http');

var express = require('express');
var socketio = require('socket.io');
var Busboy = require('busboy');
var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.use(express.static(__dirname));

app.put('/upload', function(req, res) {
  var busboy = new Busboy({ headers: req.headers});
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log('writing', filename);
    file.pipe(fs.createWriteStream('./uploads/' + filename));

    file.on('end', function() {
      io.sockets.emit('uploaded', filename);
    });
  });
  busboy.on('finish', function() {
    res.send('Upload complete!');
  });

  req.pipe(busboy);
});

server.listen(8080);
