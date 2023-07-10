'use strict';
const {SpotImages} = require
let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await SpotImages.bulkCreate([
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
    },
    {
      reviewId: 19, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 20, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 21, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 22, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 23, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 24, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 25, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 26, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 27, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 28, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 29, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 30, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 31, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 32, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 33, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 34, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 35, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 36, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 37, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 38, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 39, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 40, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 41, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 42, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 43, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 44, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 45, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 46, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 47, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 48, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 49, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 50, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 51, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 52, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 53, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 54, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 55, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 56, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 57, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 58, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 59, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 60, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 61, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 62, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 63, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 64, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 65, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 66, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 67, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 68, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 69, url: 'https://source.unsplash.com/random/?airbnb'
    },
    {
      reviewId: 70, url: 'https://source.unsplash.com/random/?airbnb'
    }

   ], options)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, options)
  }
};
