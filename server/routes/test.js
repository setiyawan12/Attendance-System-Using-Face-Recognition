const express = require('express');
const router = express.Router();
const test = require('../services/new');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(test.getData(req.query.page));
  } catch(err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = router;