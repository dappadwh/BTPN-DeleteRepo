var express = require('express');
var UserDataRouter = require('./router/deleteUserDataRouter');

const app = express();
const PORT = 3000;

app.use('/userData', UserDataRouter)

app.listen(PORT, () =>{
    console.log(`running on port ${PORT} ...`)
  })