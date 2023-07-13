const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')

const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize } = require('../../db/models');

const router = express.Router();

router.get('/current', requireAuth, async (req, res, next) => {

    const userId = req.user.id;

    const allSpots = await Spot.findAll({
        where: { ownerId: userId },

    });

    const spotsWithImagesAndRating = await Promise.all(
        allSpots.map(async (spot) => {
            const images = await SpotImage.findAll({
                where : { spotId: spot.id },
            });

            const averageRating = await spot.getAverageRating();
            return {
                ...spot.get(),
                avgRating: averageRating,
                previewImage: images.length > 0 ? images[0].url : null,
            };
        })
    );

    res.json({ Spots: spotsWithImagesAndRating });
});

router.get('/:spotId/reviews', async (req, res, next)=> {
    const spotId = req.params.spotId;
    const spot = await Spot.findByPk(spotId);
    if(!spot){
        return res.status(404).json({"message": "Spot couldn't be found"})
    }
    const reviews = await Review.findAll({
                where: { spotId: spotId},
                include: [
                    {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    },
                    {
                        model: ReviewImage,
                        as: 'ReviewImages'
                    }
                ]
            });
       const reviewsWithDetails = reviews.map((review) => {
        const user = review.User;
        const reviewImages = review.ReviewImages.map((image) => {
            return {
                id: image.id,
                url: image.url,
            };
        });
        return {
            ...review.get(),
            User: user,
            ReviewImages: reviewImages,
        }
       })
       res.json({Reviews: reviewsWithDetails})
    })


router.get('/:spotId', async (req, res, next) => {
    const foundSpot = req.params.spotId;

    const spotById = await Spot.findByPk(foundSpot, {
        include: [
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName'],
            }
        ]
    })
    if(!spotById){
       res.status(404).json({
        "message": "Spot couldn't be found"
       })
    } else {
        const images = await SpotImage.findAll({
            where: { spotId: spotById.id, preview: true},
        })
        const averageRating = await spotById.getAverageRating();

        const spotData = {
            ...spotById.get(),
            avgRating: averageRating,
            SpotImages: images.map(image => ({
                id: image.id,
                url: image.url,
                preview: image.preview,
            }))
        };

        res.json(spotData);
    }
});


const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .isInt({ min: 1, max: 5 })
        .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
]
router.post('/:spotId/reviews', validateReview, requireAuth, async (req, res, next) => {
    const spotId = req.params.spotId;
    const userId = req.user.id;

    const selectedSpot = await Spot.findByPk(spotId)
    if(!selectedSpot){
        res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    const existingReview = await Review.findOne({
        where: {
            spotId: spotId,
            userId: userId
        }
      });

      if (existingReview) {
        return res.status(500).json({
          "message": "User already has a review for this spot"
        });
      }
    const { review, stars } = req.body;
    const newReview = await Review.create({userId, spotId, review, stars})

    return res.status(201).json(newReview)
})

router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    const currentUser = req.user.id;
    const selectedSpotId = req.params.spotId;
    const selectedSpot = await Spot.findByPk(selectedSpotId);
    if(!selectedSpot){
        res.status(404).json({
            "message": "Spot couldn't be found"
           })
    }
    const {url, preview} = req.body;
    const owner = selectedSpot.ownerId

    if(currentUser !== owner) {
        res.status(403).json({
            "message": "Current user is prohibited from accessing the selected data"
        })
    }
    const newSpotImage = await SpotImage.create({spotId: selectedSpotId, url, preview})
    return res.status(201).json(newSpotImage)
})


const validatePost = [
    check('address')
      .exists({ checkFalsy: true })
      .withMessage('Street address is required'),
    check('city')
      .exists({ checkFalsy: true })
      .withMessage('City is required'),
    check('state')
      .exists({ checkFalsy: true })
      .withMessage('State is required'),
    check('country')
      .exists({ checkFalsy: true })
      .withMessage('Country is required'),
    check('lat')
      .exists({ checkFalsy: true })
      .withMessage('Latitude is not valid'),
    check('lng')
      .exists({ checkFalsy: true })
      .withMessage('Longitude is not valid'),
    check('name')
      .exists({ checkFalsy: true })
      .isLength({min: 1, max: 50})
      .withMessage('Name must be between 1 and 50 characters'),
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Description is required'),
    check('price')
      .exists({ checkFalsy: true })
      .withMessage('Price per day is required'),
    handleValidationErrors
  ];



router.post('/', validatePost, requireAuth, async (req, res, next) => {
    const  { address, city, state, country, lat, lng, name, description, price} = req.body;
    const ownerId = req.user.id;
    const newSpot = await Spot.create({ownerId, address, city, state, country, lat, lng, name, description, price});
    return res.status(201).json(newSpot)
})


router.put('/:spotId', requireAuth, async (req, res, next) => {
    const currentUser = req.user.id;
    const selectedSpotId = req.params.spotId;
    const editedSpot = await Spot.findByPk(selectedSpotId);
    const owner = editedSpot.ownerId

    let errors = {}
    if(!editedSpot){
        res.status(404).json({
            "message": "Spot couldn't be found"
           })
    }

    if(currentUser !== owner) {
        res.status(403).json({
            "message": "Current user is prohibited from accessing the selected data"
        })
    }

    try {
    const  { address, city, state, country, lat, lng, name, description, price} = req.body;
    if(address !== undefined) {
        if(address.trim() === '') errors.address = 'Street address is required';
       else editedSpot.address = address;
    }
    if(city !== undefined) {
        if(city.trim() === '') errors.city = 'City is required';
       else editedSpot.city = city;
    }
    if(state !== undefined) {
        if(state.trim() === '') errors.state = 'State is required';
       else editedSpot.state = state;
    }
    if(country !== undefined) {
        if(country.trim() === '') errors.country = 'Country is required';
      else  editedSpot.country = country;
    }
    if(lat !== undefined) {
        if(lat == '') errors.lat = 'Latitude is not valid';
       else editedSpot.lat = lat;
    }
    if(lng !== undefined) {
        if(lng == '') errors.lng = 'Longitude is not valid';
       else editedSpot.lng = lng;
    }
    if (name !== undefined) {
        if(name.trim() === '' || name.length < 1 || name.length > 50){
            errors.name = 'Name must be between 1 and 50 characters';
        }
        else editedSpot.name = name;
    }
    if(description !== undefined) {
        if(description.trim() === '') errors.description = 'Description is required';
        else editedSpot.description = description;
    }
    if(price !== undefined) {
        if(price == '') errors.price = 'Price per day is required';
        else editedSpot.price = price;
    }
    if(errors.length > 0) return res.status(400).json({errors})

    const newSpot = await editedSpot.save();


    if(Object.keys(errors).length > 0){
        return res.status(400).json({
            "message": "Bad Request",
            "errors": errors
        })
    }
    return res.json(newSpot)
} catch (err){
    return res.status(404).json({
        error: err.message
    })
}

})


router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);
    if(!spot){
        return res.status(404).json({
            "message": "Spot couldn't be found"
           })
    }
    const owner = spot.ownerId;
    const currentUser = req.user.id;
    if(owner !== currentUser){
        return res.status(403).json({
            "message": "Current user is prohibited from accessing the selected data"
        })
    }
    await spot.destroy();
    return res.json({
        "message": "Successfully deleted"
    })
})


router.get('/', async (req, res, next) => {
    const allSpots = await Spot.findAll({});

    const spotsWithImagesAndRating = await Promise.all(
        allSpots.map(async (spot) => {
            const images = await SpotImage.findAll({
                where : { spotId: spot.id,
                        preview: true},
            });


            const averageRating = await spot.getAverageRating();
            return {...spot.get(),
                    avgRating: averageRating,
                    previewImage: images.length > 0 ? images[0].url : null,
                }
    }))
    res.json(spotsWithImagesAndRating)
})




module.exports = router
