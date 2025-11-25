const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');
const auth = require('../middleware/auth');

router.post('/', auth, produkController.createProduk);
router.get('/', auth, produkController.getProduk);
router.put('/:id', auth, produkController.updateProduk);
router.delete('/:id', auth, produkController.deleteProduk);

module.exports = router;