const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/index');

require('dotenv').config()

//create our running app object
const app = express();

//allow cross origin access
app.use(cors())

//middleware for parsing requests with JSON payloads
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello to dsgs-ojc API');
});

//connects to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false});
//log a message if the above connection was successful and one if it is not.
mongoose.connection.once('open', function () {
    console.log('Connected to the Database.');
});
mongoose.connection.on('error', function (error) {
    console.log('Mongoose Connection Error : ' + error);
});

//listen for connections on the specified port
app.listen(process.env.PORT || 5000, function () {
    console.log(`Server listening on port ${process.env.PORT}.`);
});