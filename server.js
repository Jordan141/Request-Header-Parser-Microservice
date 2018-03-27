const express = require('express')
const app = express()

app.get("/", (req, res) => {
  const IP = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  
 res.send({
  'ipAddress': IP.split(',')[0],
   'language':  req.headers["accept-language"].split(',')[0],
   'Operating System': req.headers['user-agent'].split(') ')[0].split(' (')[1]
 })
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
