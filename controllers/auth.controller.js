
const { userService } = require('../services');
const { resHandler } = require('../utils')

module.exports.login = async (req, res)=> {
    const {username, password} = req.body;
    
    try {
        const data = await userService.login(username, password);
        return resHandler(res, 200, data, 'User logged In')
    } catch (error) {
        return resHandler(res, 401, error, 'Error in Login')
    }

}