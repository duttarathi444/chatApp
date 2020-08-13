var express = require('express');
var admincontrol = require('../controllers/adminControl');
var router = express.Router();

router.get('/', admincontrol.admin);

router.get('/test', admincontrol.test);

module.exports = router;