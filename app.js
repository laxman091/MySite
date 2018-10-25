/*
 * Module dependencies
 */
 var router = require('./routes/index.js');
var request = require('request')
 var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
//var router = express.Router();

var index = require('./routes/index');


var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

/*app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})*/

var url = 'http://allcodingworld.com/api/read.php';
request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  //var count = Object.keys(body.data).length;
  //console.log(count);
  //console.log(body.data);
  //console.log(body.employee_salary);
  app.get('/',function(req, res){
  //res.sendFile(path.join(__dirname+'/index.html'));
  res.render('index', {'data': body.data, 'title': 'Student Records' } );

});
})

//module.exports = app;

app.listen(3000)