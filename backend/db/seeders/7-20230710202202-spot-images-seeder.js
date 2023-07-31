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
        url: 'https://www.nztravelorganiser.com/wp-content/uploads/2019/09/hobbiton-1024x683.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://c.files.bbci.co.uk/53AC/production/_91302412_privet.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://news.airbnb.com/wp-content/uploads/sites/4/2021/09/winnie_the_pooh-08_Social.jpg?fit=1200%2C628?w=876',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://blog.discoveruniversal.com/wp-content/uploads/2021/08/HogwartsExpress.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://i.pinimg.com/originals/0d/2a/bf/0d2abf0b2dba41e9190e07342d10c185.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://i.pinimg.com/originals/d6/25/af/d625af7199d518d5896f8b533ec0bd42.png',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://p1.pxfuel.com/preview/489/744/40/sponge-bob-house-of-sponge-bob-house-pineapple-house-under-the-sea-pineapple-under-the-sea.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://assets3.cbsnewsstatic.com/hub/i/r/2015/04/17/b5116da6-6659-4f77-ac64-113f270e8304/thumbnail/640x554/c49473746a3b1c6d32ba8e33ac912e57/new-big-birds-nest.jpg?v=ed1888effc334856324ceac60c145559',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pasadena_City_Hall_David_Wakely_%28cropped%29.jpg/1200px-Pasadena_City_Hall_David_Wakely_%28cropped%29.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/12/reimagining-the-simpsons-house-design-householdquotes-cover_800.png',
        preview: true,
      },
      {
        spotId: 11,
        url: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/11/thor-ragnarok4.jpg',
        preview: true,
      },
      {
        spotId: 12,
        url: 'https://media.cnn.com/api/v1/images/stellar/prod/200823040054-tower-bridge-open-0822.jpg?q=w_2000,h_1333,x_0,y_58,c_crop',
        preview: true,
      },
      {
        spotId: 13,
        url: 'https://images.squarespace-cdn.com/content/v1/6047d405b02148755fb6e601/57e961bb-e4ad-487a-a36c-7bc0aa45489b/Dima_Svetlolazarovic_panoramic_view_of_the_legendary_city_of_at_0ee0484a-ac9b-4cfe-b332-4fcfdfe47ae2.png',
        preview: true,
      },
      {
        spotId: 14,
        url: 'https://cdn.mos.cms.futurecdn.net/AQh73c64EohNEyuNhcqsQf.jpg',
        preview: true,
      },
      {
        spotId: 15,
        url: 'https://www.ancient-origins.net/sites/default/files/field/image/Mount-Olympus.jpg',
        preview: true,
      },
      {
        spotId: 16,
        url: 'https://m.media-amazon.com/images/M/MV5BZDc5MWFjZGQtN2EyMC00NmMxLWFmZmUtZmIwYTAxMjk4OThmXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
        preview: true,
      },
      {
        spotId: 17,
        url: 'https://blog.discoveruniversal.com/wp-content/uploads/2021/07/Skull-Island-Reign-of-Kong-at-Universals-Islands-of-Adventure.jpg',
        preview: true,
      },
      {
        spotId: 18,
        url: 'https://frightfind.com/wp-content/themes/Directory/images/tmp/1586023424_real-camp-crystal-lake.jpg',
        preview: true,
      },
      {
        spotId: 19,
        url: 'https://static1.mansionglobal.com/production/media/article-images/5e01e20345927c3eda7eee194e1863fd/large_CHAMONIX_EXTERIOR_2-DUSK.jpg',
        preview: true,
      },
      {
        spotId: 20,
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/25/94/54/vista-frontal.jpg',
        preview: true,
      },
      {
        spotId: 21,
        url: 'https://1.bp.blogspot.com/-4t_fC2oGJkE/VtBPw4tDDaI/AAAAAAAAAYQ/li2o50GCCL4/s1600/Krypton.jpg',
        preview: true,
      },
      {
        spotId: 22,
        url: 'https://comicvine.gamespot.com/a/uploads/scale_medium/3/30334/1191224-jla5310.jpg',
        preview: true,
      },
      {
        spotId: 23,
        url: 'https://www.joshuakennon.com/wp-content/uploads/2012/05/Mary-Poppins.jpeg',
        preview: true,
      },
      {
        spotId: 24,
        url: 'https://i.ytimg.com/vi/YrPaOcr2kUc/hqdefault.jpg',
        preview: true,
      },
      {
        spotId: 25,
        url: 'https://static.wikia.nocookie.net/starwars/images/d/dd/ST-ewokvillage.jpg/revision/latest?cb=20070811234556',
        preview: true,
      },
      {
        spotId: 26,
        url: 'https://cdn.shopify.com/s/files/1/0432/1981/files/WamArt1_001_large.jpg?v=1587134132',
        preview: true,
      },

    ], options)

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options)

  }
};
