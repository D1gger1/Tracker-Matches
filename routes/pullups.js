const express = require('express');
const router = express.Router();
const {addPullupSet, getPullupSet} = require('../controllers/pullupController');
const authToken = require('../middleware/auth');

router.post('/', authToken, addPullupSet);
router.get('/', authToken, getPullupSet);

module.exports = router;