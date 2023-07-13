const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')

const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize } = require('../../db/models');

const router = express.Router();


router.get('/current', requireAuth, async (req, res, next) => {

    const userId = req.user.id;

    const allReviews = await Review.findAll({
        where: { userId: userId},
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName'],
            },
            {
                model:Spot,
                include: [
                    {
                        model: SpotImage,
                        as: 'previewImage',
                        limit: 1
                    }
                ],
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price' ]
            },
            {
                model: ReviewImage,
                as: 'ReviewImages'
            }
        ],
    });
    const reviewsWithDetails = allReviews.map(review => {
        const user = review.User;
        const spot = review.Spot;
        let reviewImages = review.ReviewImages;

        spot.previewImage = spot.previewImage.length > 0 ? spot.previewImage[0].url : null;

        reviewImages = reviewImages.map(image => {
            return {
                id: image.id,
                url: image.url
            }
        });
        return {
            ...review.get(),
            User: user,
            Spot: spot,
            ReviewImages: reviewImages
        }
    })
    res.json({ Reviews: reviewsWithDetails})
})









module.exports = router
