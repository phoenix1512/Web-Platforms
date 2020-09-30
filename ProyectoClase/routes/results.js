const express = require('express');
const controller = require('../controllers/results');

const router = express.Router();

router.get('/:n1/:n2', controller.sum);

router.post('/', controller.multiply);

router.put('/', controller.divide);

router.patch('/', controller.pow);

router.delete('/:n1/:n2', controller.subtract);

module.exports = router;
