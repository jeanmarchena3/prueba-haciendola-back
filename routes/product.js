const express = require('express');
const Product = require('../controllers/product');

const router = express.Router();

router.get('/', Product.getAll);
router.get('/:id', Product.get);
router.post('/', Product.create);
router.put('/:id', Product.update);
router.delete('/:id', Product.delete);

module.exports = router;
