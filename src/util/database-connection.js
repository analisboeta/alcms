var mongoose = require('mongoose');

const dbConnection = process.env.HEROKU_DB;

mongoose.connect(dbConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(err) {
    console.log('deu erro')
});

db.once('open', function() {
    console.log('SUCESSO!!!! :)')
});