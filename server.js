const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == 'js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });


  // insert main.js function
  else if (page == '/runCpu'){
    const string = params["checkCoinFlip"]
    console.log(string,"randomCpu");
    // const response = { message: "Heads"}
    if(string == ""){
  		coinFace = { message: ""}
      res.end(JSON.stringify(cpu))
  	}else{
      coinFace = { message: ""}
      res.end(JSON.stringify(player))

    }

  }

});

server.listen(8000);
