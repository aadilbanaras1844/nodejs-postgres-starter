const { OfficesModel } = require('./models')

module.exports.create = async(params) => {
    return OfficesModel.create(params);
}
module.exports.update = async(id, params) => {
    return OfficesModel.update(params, {
        where: {
          id
        }
      });
    return {};
}
module.exports.delete = async(id) => {
    return OfficesModel.destroy({
        where: {
            id
        }
      });
}
module.exports.list = async(query,limit,offset, sortBy) => {
    return OfficesModel.findAndCountAll({
        where: {
            ...query,
        },
        limit,
        offset,
    });
}