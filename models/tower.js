'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tower.hasMany(models.Office,{as: 'allOffices', foreignKey: 'towerId'})
    }
  };
  Tower.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    floors: DataTypes.INTEGER,
    offices: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Tower',
  });
  return Tower;
};