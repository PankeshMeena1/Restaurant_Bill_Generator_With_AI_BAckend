const express = require('express');
const router = express.Router();
const { generateBill } = require('../controllers/billController');

router.post('/', generateBill);

module.exports = router;
