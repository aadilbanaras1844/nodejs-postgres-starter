const { resHandler } = require('../utils')
const { towerService } = require('../services');
const { update } = require('../sockets/socket-events')
module.exports.createTower = async (req, res) => {
    const params = req.body;
    const tower = await towerService.create(params);
    update('ADD', 'New Tower Added')
    return resHandler(res, 200, tower, 'Tower created')
}
module.exports.updateTower = async  (req, res) => {
    const params = req.body;
    const towerId = req.params.id;
    const  tower = await towerService.update(towerId,params)
    update('UPDATE', 'A Tower Updated')
    return resHandler(res, 200, tower, 'Tower updated')
}
module.exports.deleteTower = async (req, res) => {
    const towerId = req.params.id;
    const  tower = await towerService.delete(towerId)
    update('DELETE', 'A Tower Deleted')
    return resHandler(res, 200, tower, 'Tower deleted')
}
module.exports. listTowers = async  (req, res) => {
    const { limit=20, offset=0,sortBy='createdAt', sortType='DESC', ...query} = req.query;
    const showWithOffices = query['show-with-offices'];
    delete query['show-with-offices'];
    const towers = await towerService.list(query,limit,offset, sortBy, showWithOffices, sortType);
    return resHandler(res, 200, towers, 'Towers list')
}