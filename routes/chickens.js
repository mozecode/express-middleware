'use strict';
const { Router } = require('express');
const router = Router();

const { showChickens } = require('../controllers/chickenCtrl');


router.get('/see-our-chickens', showChickens);

module.exports = router;