const { resHandler } = require('../utils')
const { officeService } = require('../services')

module.exports.createOffice = async (req, res) => {
    const params = req.body;
    try {
        const office = await officeService.create(params);
        return resHandler(res, 200, office, 'Office created')
    } catch (error) {
        return resHandler(res, 500, {message: error.message}, 'Office created')
    }
}