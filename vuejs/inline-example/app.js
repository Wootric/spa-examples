const express = require('express');  
const app = express();

app.use('/', express.static('./'));
 
const port = 5050;

app.listen(port, function() {  
    console.log('App is running on localhost:' + port);
});