const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.all('/*', function(req, res, next) {
    res.sendFile('/dist/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 8080);