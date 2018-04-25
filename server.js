var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! world never says hello back :(s')
})

app.listen(3000)
