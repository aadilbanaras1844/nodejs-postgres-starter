var express = require('express');
var router = express.Router();
const { officeCtrl } = require('../controllers');
const vldtns = require('./helpers/validations')
const { valMW } = require('./helpers/middlewares')

/* POST office add. */
router.post('/', valMW(vldtns.createOffice), officeCtrl.createOffice);


module.exports = router;
