const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello ANGULAR World')
  //TODO: SEND ANGULAR TEAM MOCK DATA
})
 
app.listen(3002)