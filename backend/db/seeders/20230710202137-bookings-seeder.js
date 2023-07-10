'use strict';
const {Booking} = require('../models')

let options = {}


if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate([
        {
            spotId: 1,
            userId: 1,
            startDate: '2023-09-01',
            endDate: '2023-09-03',
        },
        {
            spotId: 2,
            userId: 1,
            startDate: '2023-09-05',
            endDate: '2023-09-10',
        },
        {
            spotId: 3,
            userId: 1,
            startDate: '2023-09-15',
            endDate: '2023-09-20',
        },
        {
            spotId: 4,
            userId: 1,
            startDate: '2023-09-22',
            endDate: '2023-09-26',
        },
        {
            spotId: 5,
            userId: 1,
            startDate: '2023-10-01',
            endDate: '2023-10-05',
        },
        {
            spotId: 6,
            userId: 1,
            startDate: '2023-10-10',
            endDate: '2023-10-15',
        },

        {
            spotId: 7,
            userId: 2,
            startDate: '2023-09-05',
            endDate: '2023-09-09',
        },
        {
            spotId: 8,
            userId: 2,
            startDate: '2023-09-12',
            endDate: '2023-09-18',
        },
        {
            spotId: 9,
            userId: 2,
            startDate: '2023-09-20',
            endDate: '2023-09-25',
        },
        {
            spotId: 10,
            userId: 2,
            startDate: '2023-09-30',
            endDate: '2023-10-03',
        },
        {
            spotId: 11,
            userId: 2,
            startDate: '2023-10-07',
            endDate: '2023-10-11',
        },
        {
            spotId: 12,
            userId: 2,
            startDate: '2023-10-16',
            endDate: '2023-10-20',
        },

        {
            spotId: 13,
            userId: 3,
            startDate: '2023-09-07',
            endDate: '2023-09-11',
        },
        {
            spotId: 14,
            userId: 3,
            startDate: '2023-09-14',
            endDate: '2023-09-18',
        },
        {
            spotId: 15,
            userId: 3,
            startDate: '2023-09-21',
            endDate: '2023-09-26',
        },
        {
            spotId: 16,
            userId: 3,
            startDate: '2023-09-28',
            endDate: '2023-10-02',
        },
        {
            spotId: 17,
            userId: 3,
            startDate: '2023-10-06',
            endDate: '2023-10-10',
        },
        {
            spotId: 18,
            userId: 3,
            startDate: '2023-10-14',
            endDate: '2023-10-18',
        },

        {
            spotId: 19,
            userId: 4,
            startDate: '2023-09-03',
            endDate: '2023-09-07',
        },
        {
            spotId: 20,
            userId: 4,
            startDate: '2023-09-11',
            endDate: '2023-09-16',
        },
        {
            spotId: 21,
            userId: 4,
            startDate: '2023-09-18',
            endDate: '2023-09-22',
        },
        {
            spotId: 22,
            userId: 4,
            startDate: '2023-09-26',
            endDate: '2023-09-30',
        },
        {
            spotId: 23,
            userId: 4,
            startDate: '2023-10-04',
            endDate: '2023-10-08',
        },
        {
            spotId: 24,
            userId: 4,
            startDate: '2023-10-12',
            endDate: '2023-10-16',
        },

        {
            spotId: 7,
            userId: 1,
            startDate: '2024-01-02',
            endDate: '2024-01-07',
        },
        {
            spotId: 8,
            userId: 1,
            startDate: '2024-01-10',
            endDate: '2024-01-14',
        },

        {
            spotId: 1,
            userId: 2,
            startDate: '2024-01-05',
            endDate: '2024-01-10',
        },
        {
            spotId: 3,
            userId: 2,
            startDate: '2024-01-15',
            endDate: '2024-01-19',
        },

        {
            spotId: 5,
            userId: 3,
            startDate: '2024-01-03',
            endDate: '2024-01-08',
        },
        {
            spotId: 6,
            userId: 3,
            startDate: '2024-01-12',
            endDate: '2024-01-16',
        },

        {
            spotId: 9,
            userId: 4,
            startDate: '2024-01-04',
            endDate: '2024-01-08',
        },
        {
            spotId: 11,
            userId: 4,
            startDate: '2024-01-13',
            endDate: '2024-01-17',
        },
        {
            spotId: 25,
            userId: 1,
            startDate: '2024-02-01',
            endDate: '2024-02-05',
        },
        {
            spotId: 26,
            userId: 2,
            startDate: '2024-02-08',
            endDate: '2024-02-13',
        },
        {
            spotId: 27,
            userId: 3,
            startDate: '2024-02-15',
            endDate: '2024-02-19',
        },
        {
            spotId: 28,
            userId: 4,
            startDate: '2024-02-21',
            endDate: '2024-02-25',
        },
        {
            spotId: 25,
            userId: 2,
            startDate: '2024-03-03',
            endDate: '2024-03-07',
        },
        {
            spotId: 26,
            userId: 1,
            startDate: '2024-03-09',
            endDate: '2024-03-14',
        },
        {
            spotId: 27,
            userId: 4,
            startDate: '2024-03-16',
            endDate: '2024-03-20',
        },
        {
            spotId: 28,
            userId: 3,
            startDate: '2024-03-22',
            endDate: '2024-03-27',
        },
        {
            spotId: 25,
            userId: 3,
            startDate: '2024-03-29',
            endDate: '2024-04-02',
        },
        {
            spotId: 26,
            userId: 4,
            startDate: '2024-04-04',
            endDate: '2024-04-09',
        },
        {
            spotId: 27,
            userId: 1,
            startDate: '2024-04-11',
            endDate: '2024-04-15',
        },
        {
            spotId: 28,
            userId: 2,
            startDate: '2024-04-17',
            endDate: '2024-04-22',
        },
    ], options)
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Bookings', null, options)
  }
};
