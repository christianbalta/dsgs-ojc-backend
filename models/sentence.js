const mongoose = require('mongoose');

//prototype that maps to a MongoDB collection and defines the shape of the documents
const sentenceSchema = new mongoose.Schema({
    sentence: {
        type: String,
        required: [true, "Category is required"]
    },
    videoUrl: {
        type: String,
        required: [true, "IconUrl is required"]
    }
});

//first argument is the singular uppercase name of database collection. Sentence represents the sentences collection
//second argument is the schema which we defined above
module.exports = mongoose.model('Sentence', sentenceSchema);
