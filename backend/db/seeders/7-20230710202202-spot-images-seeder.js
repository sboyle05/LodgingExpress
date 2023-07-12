'use strict';
const {SpotImage} = require('../models')
let options = {}

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([

      {

        spotId: 1,
        url: 'https://source.unsplash.com/random/?hobbiton',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://source.unsplash.com/random/?harrypotter',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://source.unsplash.com/random/?poohbear',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://source.unsplash.com/random/?hogwartsexpress',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://source.unsplash.com/random/?bakerstreet',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://source.unsplash.com/random/?pokemon',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://source.unsplash.com/random/?spongebob',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://source.unsplash.com/random/?kidsplaying',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://source.unsplash.com/random/?pawnee',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://source.unsplash.com/random/?simpsons',
        preview: true,
      },
      {
        spotId: 11,
        url: 'https://source.unsplash.com/random/?thor',
        preview: true,
      },
      {
        spotId: 12,
        url: 'https://source.unsplash.com/random/?bakerstreet',
        preview: true,
      },
      {
        spotId: 13,
        url: 'https://source.unsplash.com/random/?atlantis',
        preview: true,
      },
      {
        spotId: 14,
        url: 'https://source.unsplash.com/random/?mars',
        preview: true,
      },
      {
        spotId: 15,
        url: 'https://source.unsplash.com/random/?greek',
        preview: true,
      },
      {
        spotId: 16,
        url: 'https://source.unsplash.com/random/?narnia',
        preview: true,
      },
      {
        spotId: 17,
        url: 'https://source.unsplash.com/random/?kingkong',
        preview: true,
      },
      {
        spotId: 18,
        url: 'https://source.unsplash.com/random/?lake',
        preview: true,
      },
      {
        spotId: 19,
        url: 'https://source.unsplash.com/random/?bakerstreet',
        preview: true,
      },
      {
        spotId: 20,
        url: 'https://source.unsplash.com/random/xmen?',
        preview: true,
      },
      {
        spotId: 21,
        url: 'https://source.unsplash.com/random/?superman',
        preview: true,
      },
      {
        spotId: 22,
        url: 'https://source.unsplash.com/random/?city',
        preview: true,
      },
      {
        spotId: 23,
        url: 'https://source.unsplash.com/random/?cherrytree',
        preview: true,
      },
      {
        spotId: 24,
        url: 'https://source.unsplash.com/random/?nemo',
        preview: true,
      },
      {
        spotId: 25,
        url: 'https://source.unsplash.com/random/?endor',
        preview: true,
      },
      {
        spotId: 26,
        url: 'https://source.unsplash.com/random/?wizardofoz',
        preview: true,
      },

    ], options)

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options)

  }
};
