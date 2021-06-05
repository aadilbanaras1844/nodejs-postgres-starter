
const db = require('../models');

const TowersModel = db.Tower;
const OfficesModel = db.Office;
const UsersModel = db.User;

module.exports= {
    TowersModel,
    OfficesModel,
    UsersModel
}