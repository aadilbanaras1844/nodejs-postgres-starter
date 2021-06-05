
const Joi = require('joi');

module.exports.createTower = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    floors: Joi.number().required(),
    offices: Joi.number().required(),
    rating: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
});

module.exports.updateTower = Joi.object({
    name: Joi.string(),
    location: Joi.string(),
    floors: Joi.number(),
    offices: Joi.number(),
    rating: Joi.number(),
    latitude: Joi.number(),
    longitude: Joi.number(),
});

module.exports.listTowers = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    location: Joi.string(),
    floors: Joi.number(),
    offices: Joi.number(),
    rating: Joi.number(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number(),
    offset: Joi.number(),
    'show-with-offices': Joi.boolean()
});


module.exports.createOffice = Joi.object({
    towerId: Joi.number().required(),
    location: Joi.string().required(),
    name: Joi.string().required()
});

module.exports.login = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});