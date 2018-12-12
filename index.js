const express = require('express');
const app = express();
const port = 3000;
var acl = require('acl');

var url = "mongodb://localhost:27017/ticket_acl";

var mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("connected");
    acl = new acl(new acl.mongodbBackend(db.db, 'acl_'));
    
});



app.get('/', (req, res) => res.send('Hello World!'));

app.get('/acl', function(req, res) {
    acl.allow('admin', 'blogs', 'create')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


//acl.allow('guest', 'blogs', 'view');
