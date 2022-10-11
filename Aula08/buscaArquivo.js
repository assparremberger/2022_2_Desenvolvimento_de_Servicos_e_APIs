const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(  (req, res) => {
    fs.readFile( "oi.html" , function(erro, dados){
        if(!erro){
            res.writeHead( 200, { 
                'Content-type':'text/html'
            } );
            res.write( dados );
            res.end();
        }else{
            console.log(erro);
        }
    } );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});