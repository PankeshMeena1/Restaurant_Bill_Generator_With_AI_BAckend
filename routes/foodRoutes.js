const express = require('express');
const router = express.Router();
const { getFoodItems, addFood } = require('../controllers/foodController');

const upload = require('../middleware/upload');

router.get('/', getFoodItems);
router.post('/', upload.single('image'), addFood);

module.exports = router;
