const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var url = "mongodb://localhost:27017/ticket_acl";

var mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("connected");
});
var acl = require('acl');
acl = new acl(new acl.mongodbBackend(db, 'acl_'));
