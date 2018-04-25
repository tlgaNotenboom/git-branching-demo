var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Worldx!')
})

app.listen(3000)
