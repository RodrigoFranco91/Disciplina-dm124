const fs = require('fs');

const http = require('http');
const host = 'localhost';
const port = 3000;


function requestHandler(request, response) {
   fs.readFile('./index.html', 'utf8', (error, html) =>{
       response.end(html);
   })
}

http.createServer(requestHandler)
.listen(port, () =>{
    console.log(`Server up on http://${host}:${port}`);
});