const { TowersModel, OfficesModel } = require('./models')

module.exports.create = async(params) => {
    return TowersModel.create(params);
}
module.exports.update = async(id, params) => {
    return TowersModel.update(params, {
        where: {
          id
        }
      });
}
module.exports.delete = async(id) => {
    return TowersModel.destroy({
        where: {
            id
        }
      });
}
module.exports.list = async(query,limit,offset, sortBy, showWithOffices='false', sortType) => {
    return TowersModel.findAndCountAll({
        where: {
            ...query,
        },
        include: [{
            model: OfficesModel,
            as: 'allOffices',
            required: showWithOffices === 'true'
        }],
        order: [[sortBy, sortType]],
        limit,
        offset,
    });
}