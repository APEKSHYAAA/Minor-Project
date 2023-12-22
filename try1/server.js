// var http = require('http')
// var fs = require('fs')

// const PORT = 8080;

// fs.readFile('./index.html',function(error,html) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("http://localhost:${8080}")
//         http.createServer(function(request, response) {
//             response.writeHeader(200, {"Content-Type": "text/html"});
//             response.write(html);
//             response.end();
//         }).listen(PORT)
//     }
// });

var http = require('http');
var fs = require('fs');
var path = require('path');

const PORT = 8080;

http.createServer(function (request, response) {
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
console.log(`Server running at http://localhost:${PORT}/`);