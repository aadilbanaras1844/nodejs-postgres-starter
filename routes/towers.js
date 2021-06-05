var express = require('express');
var router = express.Router();
const { towerCtrl } = require('../controllers');
const vldtns = require('./helpers/validations')
const { valMW, cacheResult, authMiddleware } = require('./helpers/middlewares')

/* POST towers listing. */
router.post('/', valMW(vldtns.createTower), authMiddleware, towerCtrl.createTower);

/* GET towers listing. */
router.get('/', valMW(vldtns.listTowers, true), cacheResult(60), towerCtrl.listTowers);

/* PATCH tower by id. */
router.patch('/:id', authMiddleware, towerCtrl.updateTower);

/* DELETE tower by id. */
router.delete('/:id', authMiddleware, towerCtrl.deleteTower);

module.exports = router;
