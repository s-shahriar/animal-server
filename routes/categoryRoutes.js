const express = require('express');
const { fetchAllCategory, createCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', fetchAllCategory);
router.post('/', createCategory);

module.exports = router;
