const express = require('express');
//Create an instance of the Express Router to be used as middleware
const router = express.Router();
const Letter = require('../models/letter');
const Sentence = require('../models/sentence');

/*
/* Letters
/*
 */

//returns a JSON array of all letter objects found
router.get('/letters', function (req, res) {
    Letter.find(function (err, letters) {
        res.json(letters);
    });
});

//returns a JSON object of the specified letter if it exists, otherwise returns status 404 and "No result found"
router.get('/letters/:id', function (req, res) {
    Letter.findById(req.params.id, function (err, letter) {
        if (!letter) {
            res.status(404).send('No result found');
        } else {
            res.json(letter);
        }
    });
});

/*
/* Sentences
/*
 */

//returns a JSON array of all sentences objects found
router.get('/sentences', function (req, res) {
    Sentence.find(function (err, sentences) {
        res.json(sentences);
    });
});

//returns a JSON object of the specified sentence if it exists, otherwise returns status 404 and "No result found"
router.get('/sentences/:id', function (req, res) {
    Sentence.findById(req.params.id, function (err, sentence) {
        if (!sentence) {
            res.status(404).send('No result found');
        } else {
            res.json(sentence);
        }
    });
});

module.exports = router;