let express = require('express')
    // let bodyParser = require('body-parser');

let router = express.Router();

let app = express();
app.use('/statics', express.static('statics'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/id1', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/id2', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/id3', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3001, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3001');
});
