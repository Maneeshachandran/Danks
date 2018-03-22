const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app);

const dataRoute = require('./router/screenScrapper.js');

app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

  app.use('/',(req,res,next)=>{
    console.log('inside routes');
    next();
  },dataRoute);

  module.exports = server.listen(1100, err => {
    if(err){
      throw err
    }
    console.log('Screen Scrapper Server running on 1100')
  })
