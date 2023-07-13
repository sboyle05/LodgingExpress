'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsToMany(models.User, {
        through: models.Booking,
        foreignKey: 'spotId',
        otherKey: 'userId',
        // onDelete: 'CASCADE',
        // hooks: true
      }),
      Spot.belongsToMany(models.User, {
        through: models.Review,
        foreignKey: 'spotId',
        otherKey: 'userId',
        // onDelete: 'CASCADE',
        // hooks: true
      }),
      Spot.belongsTo(models.User, {
        foreignKey: 'ownerId',
        as: 'Owner',
        // onDelete: 'CASCADE',
        // hooks: true
      }),
      Spot.hasMany(models.SpotImage, {
        foreignKey: 'spotId',
        as: 'previewImage',
        onDelete: 'CASCADE',
        hooks: true
      })
      Spot.hasMany(models.Booking, {
          foreignKey: 'spotId',
          onDelete: 'CASCADE',
          hooks: true
        })
      Spot.hasMany(models.Review, {
          foreignKey: 'spotId',
          onDelete: 'CASCADE',
          hooks: true
        })

      this.Review = models.Review;
    }
    async getAverageRating() {
      const reviews = await this.constructor.Review.findAll({
          where: {
              spotId: this.id,
          },
      });

      if (reviews.length === 0) {
          return null;
      }

      const sum = reviews.reduce((acc, review) => acc + review.stars, 0);
     const average = sum / reviews.length;
     return parseFloat(average.toFixed(1)); //parsefloat converts the result back to a number, otherwise would be a string.
    }
  }
  Spot.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    lng:  {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        len: [1, 50]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price:  {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
