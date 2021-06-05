var express = require('express');
var router = express.Router();
const { authCtrl } =require('../controllers')
const { valMW } = require('./helpers/middlewares')
const vldtns = require('./helpers/validations')

/* GET users listing. */
router.post('/login', valMW(vldtns.login), authCtrl.login);

module.exports = router;
