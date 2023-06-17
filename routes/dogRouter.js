const dogController = require('../controllers/dogController.js');

const router = require('express').Router();

router
  .get('/', dogController.allDogs)
  .post('/', dogController.addNewDog)

module.exports = router;