const { resHandler } = require('../utils')
const { towerService } = require('../services');

module.exports.createTower = async (req, res, next) => {
    const params = req.body;
    const tower = await towerService.create(params);
    return resHandler(res, 200, tower, 'Tower created')
}
module.exports.updateTower = async  (req, res, next) => {
    const params = req.body;
    const towerId = req.params.id;
    const  tower = await towerService.update(towerId,params)
    return resHandler(res, 200, tower, 'Tower updated')
}
module.exports.deleteTower = async (req, res, next) => {
    const towerId = req.params.id;
    const  tower = await towerService.delete(towerId)
    return resHandler(res, 200, tower, 'Tower deleted')
}
module.exports.listTowers = async  (req, res, next) => {
    const { limit=20, offset=0,sortBy='createdAt', ...query} = req.query;
    const showWithOffices = query['show-with-offices'];
    delete query['show-with-offices'];
    const towers = await towerService.list(query,limit,offset, sortBy, showWithOffices);
    return resHandler(res, 200, towers, 'Towers list')
}