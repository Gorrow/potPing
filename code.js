const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + ' Ping received');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(process.env.BOTURL);
  http.get(process.env.BIRBURL);
}, 1800000);
