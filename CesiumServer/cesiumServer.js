var configurations = {
  tiles: "./titles_newest",
}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var http = require('http').Server(app);

const port = 3500;

//configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=>{
  res.header("Access-control-Allow-Origin","*");
  res.header("Access-control-Allow-Header","Origin X-Requested-With, Content-Type, Accept");
  next();

     
});

app.use(express.static(configurations.tiles));

var httpServer=http.listen(port,function(){
console.log(`Tiles server has been started! ${port}`);
});

var exports = module.exports={};
exports.httpServer = httpServer;






