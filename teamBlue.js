const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello REACT World')
  //TODO: SEND REACT TEAM MOCK DATA
})
 
app.listen(3000)