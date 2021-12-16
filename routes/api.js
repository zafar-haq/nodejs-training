var express = require('express')
var app = express()
var birds = require('./birds')
var CustomerController = require('../controllers/CustomerController')

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
app.get('/example/c', [cb0, cb1, cb2]) //multiple functions callbacks
app.get('/', function (req, res) {
    res.send('Home');
  });
app.use('/birds', birds) //modularity approach, related routes in seperate file.

app.get('/middlware-practice', myMiddlleware, function(req, res){ //route with middleware
    res.send(req.message);
})

function myMiddlleware(req, res, next){
    console.log('before')
    req.message="Hello world"
    next()
    console.log('after middleware')
}

app.post('/customer/create', CustomerController.create);
app.post('/customer/update', CustomerController.update);
app.post('/customer/read', CustomerController.read);
app.post('/customer/delete', CustomerController.delete);

app.listen(8000, '127.0.0.1', () => {console.log("listening on 8000")});