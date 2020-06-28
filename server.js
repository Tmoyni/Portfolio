// const path = require('path');
// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname, '..', 'public');
// const port = process.env.PORT || 4000;

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//    res.sendFile(path.join(publicPath, 'index.html'));
// });

// app.listen(port, () => {
//    console.log('Server is up!');
// });



// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/'));
// app.listen(process.env.PORT || 8080);



const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);