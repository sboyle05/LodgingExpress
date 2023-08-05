'use strict';

const { Review } = require('../models');

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Review.bulkCreate([
    {
      spotId: 1,
      userId: 1,
      review: 'Hobbiton was a delightful stay. All the Hobbits made my stay feel so special. One Hobbit had a scary ring that drew unwanted attention. Would have been a 5 star stay if not for this',
      stars: 3
    },
    {
      spotId: 2,
      userId: 2,
      review: 'Great place, but the cupboard under the stairs was a bit cramped. Also, the owl post kept waking me up in the morning. 3 stars for the nostalgia, but would appreciate more room next time.',
      stars: 3
    },
    {
      spotId: 3,
      userId: 1,
      review: 'Was hoping for more honey but got chased by a Heffalump instead. Also, too many stick-throwing games. Lost a lot of time, but overall a sweet stay.',
      stars: 3
    },
    {
      spotId: 4,
      userId: 3,
      review: 'Travel was fast and efficient but finding the platform was a bit tricky. Nearly got hit by a Muggle train. The chocolate frogs were a nice touch though.',
      stars: 4
    },
    {
      spotId: 5,
      userId: 4,
      review: 'The place was decent but I kept hearing violin music at odd hours. Also, I am not sure but I think my host deduced my entire life story just by looking at me.',
      stars: 4
    },
    {
      spotId: 6,
      userId: 2,
      review: 'Overall nice but kept getting woken up by loud battle cries of "I choose you!" in the middle of the night. Also, could not find the bathroom. Are we supposed to go in the tall grass?',
      stars: 3
    },
    {
      spotId: 7,
      userId: 3,
      review: 'Great location, friendly neighbors. Spongebob was a bit too loud but Squidward made up for it. Krabby Patty is overrated.',
      stars: 4
    },
    {
      spotId: 8,
      userId: 1,
      review: 'Went in expecting to chill out in a nest. Spent the entire time being taught the alphabet and how to count. Great for kids, not so much if you want to relax.',
      stars: 2
    },
    {
      spotId: 9,
      userId: 2,
      review: 'Stay was alright. Ended up getting caught in a city-wide scandal involving a miniature horse. Would recommend if you are into waffles and chaos.',
      stars: 3
    },
    {
      spotId: 10,
      userId: 4,
      review: 'Very interesting place, but I kept getting hit on the head by a mischievous baby with a mallet. Homer was good company, though. D\'oh!',
      stars: 3
    },
    {
      spotId: 11,
      userId: 3,
      review: 'Great place with grandeur. But Thor kept throwing his hammer around and it got quite noisy. I would recommend it if you can put up with constant thunder.',
      stars: 4
    },
    {
      spotId: 12,
      userId: 1,
      review: 'Quirky place with a captivating view. However, every hour on the hour, the entire BnB would lift up for a ship to pass under, causing some minor disruption to my tea time. Also, London cab drivers seemed rather perplexed each time I asked to be dropped off at the middle of Tower Bridge. Quite an adventure, though I do wish theyd mentioned the incessant horn honking from confused drivers.',
      stars: 4
    },
    {
      spotId: 13,
      userId: 2,
      review: 'I was expecting water but instead got a bunch of sea life talking to me about some trident. Aquaman was no help. The scenery was beautiful though.',
      stars: 3
    },
    {
      spotId: 14,
      userId: 4,
      review: 'Great views but the atmosphere is a bit thin. Met Elon Musk though, so that was a plus. Bring your own oxygen.',
      stars: 3
    },
    {
      spotId: 15,
      userId: 1,
      review: 'Lovely stay, but Zeus kept throwing lightning bolts. Also, being fed nectar and ambrosia all day gets a bit monotonous.',
      stars: 4
    },
    {
      spotId: 16,
      userId: 3,
      review: 'Narnia is a fantastic place, but the talking animals got a bit too political. Also, I now have a fur allergy.',
      stars: 3
    },
    {
      spotId: 17,
      userId: 4,
      review: 'Kong was a bit too loud and I kept finding giant footprints everywhere. But the location is a nature lover\'s dream. Just avoid going out during Kong\'s feeding time.',
      stars: 3
    },
    {
      spotId: 18,
      userId: 1,
      review: 'Not a great place for a holiday. The hockey-masked caretaker was a bit too overbearing. Definitely not for the faint-hearted.',
      stars: 1
    }



   ], options)
  },

  async down (queryInterface, Sequelize) {
     options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options, null)
  },
};
