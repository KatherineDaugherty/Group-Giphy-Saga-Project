const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config()
const router = express.Router();

router.post('/', (req, res) => {
    console.log(process.env.GIPHY_API_KEY)

    axios.get(
     
        `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.string}`
    ).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log('error in search.router', error);
        res.sendStatus(500);
    })
});




module.exports = router