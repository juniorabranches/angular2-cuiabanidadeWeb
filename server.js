var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(__dirname + '/src'));

var renderIndex = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/index.html'));
}

app.get('/*', renderIndex);

app.listen(process.env.PORT || 8080);
console.log("Server up on port 8080");
