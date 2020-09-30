const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

/* GET users listing. */
router.post('/', controller.create);

router.get('/', controller.list);

router.get('/:id', controller.index);

router.patch('/', controller.replace);

router.put('/', controller.update);

router.delete('/', controller.destroy);

module.exports = router;
