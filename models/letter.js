const mongoose = require('mongoose');

//prototype that maps to a MongoDB collection and defines the shape of the documents
const letterSchema = new mongoose.Schema({
    letter: {
        type: String,
        required: [true, "Category is required"]
    },
    imageUrl: {
        type: String,
        required: [true, "IconUrl is required"]
    }
});

//first argument is the singular uppercase name of database collection. Category represents the categories collection
//second argument is the schema which we defined above
module.exports = mongoose.model('Letter', letterSchema);