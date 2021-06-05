const { UsersModel } = require('./models');
const { compareString } = require('../utils')
const keys = require('../config/keys')
const jwt = require('jsonwebtoken');

module.exports.login = async(username, password) => {
    const user = await UsersModel.findOne({
        where: {
            username
        }
    })
    if(user && compareString(password, user.dataValues.password)){

        return {
            token: jwt.sign({username: user.username}, keys.jwtSecret, {
                expiresIn: `${keys.jwtTokenExpiryInHours}h`,
            }),
            username: user.username
        };
    } else {
        throw new Error('Error in Login')
    }
}
