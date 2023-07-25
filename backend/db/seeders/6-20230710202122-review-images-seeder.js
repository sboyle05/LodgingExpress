'use strict';
const {ReviewImage} = require('../models')
let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await ReviewImage.bulkCreate([
    {
      reviewId: 1, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 2, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 3, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 4, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 5, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 6, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 7, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 8, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 9, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 10, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 11, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 12, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 13, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 14, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 15, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 16, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 17, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 18, url: 'https://source.unsplash.com/random/?airbnb'
    }
   ], options)
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages'
    await queryInterface.bulkDelete(options, null)
  }
};
