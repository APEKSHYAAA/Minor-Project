const http = require('http');
const fs = require('fs');
const path = require('path');
const socketIO = require('socket.io');

const PORT = 6969;

const server = http.createServer(function (request, response) {
    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        // add more MIME types if needed
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            console.log(error);
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);

const io = socketIO(server);
console.log(`Server running at http://localhost:${PORT}/`);

io.on('connection', (socket) => {
    console.log('a user connected'); // This is working

    socket.on('chat message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})