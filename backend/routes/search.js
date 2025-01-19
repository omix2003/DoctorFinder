const express = require('express');
const router = express.Router();
const { searchDoctors } = require('../controllers/searchController');

router.get('/', searchDoctors);

module.exports = router;
