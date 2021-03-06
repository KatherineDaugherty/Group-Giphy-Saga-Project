const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


// add a new favorite
//POST KD 
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorite ("url")
  VALUES ($1)`;
  const queryValues = [
    newFavorite.url
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('ERROR in POST', err);
      res.sendStatus(500);
    });
});

//GET favorites from DB
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM favorite`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('ERROR in GET', err);
      res.sendStatus(500);
    });
});


// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
