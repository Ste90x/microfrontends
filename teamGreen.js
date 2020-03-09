const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello VUE World')
  //TODO: SEND VUE TEAM MOCK DATA
})
 
app.listen(3001)