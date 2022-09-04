import express from 'express';

import longestWord from './longestWord.js';
import shortestWord from './shortestWord.js';
import wordLengths from './wordLengths.js';

const app = express();

    app.use(express.static('public'));



app.get("/api/word_game", function (req, res) {

    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error : 'Please send in a sentence to analyse'
        })
    }


    res.json({

        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
         sum: wordLengths(sentence)
    });
});

const PORT = 3009;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});