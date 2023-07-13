const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')

const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize } = require('../../db/models');

const router = express.Router();


router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
        const currentUser = req.user.id;
        const selectedReview = req.params.reviewId;
        const review = await Review.findByPk(selectedReview, {
            include: [
                {
                    model: User
                },
                {
                    model: ReviewImage
                },

            ]
        });
        if(!review){
            res.status(404).json({
                "message": "Review couldn't be found"
            })
        }
        const reviewOwner = review.User.id;
        if(currentUser !== reviewOwner){
            res.status(403).json({
                "message": "Current user is prohibited from accessing the selected data"
            })
        }
        console.log('review:',review)
        if (review.ReviewImages.length > 10){
            res.status(403).json({
                "message": "Maximum number of images for this resource was reached"
            })
        }
        const {url} = req.body;
        const newImage = await ReviewImage.create({reviewId: selectedReview, url})
        return res.json(newImage)
})

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


router.put('/:reviewId', requireAuth, async (req, res, next) => {
    const currentUser = req.user.id;
    const selectedReview = req.params.reviewId;
    const reviewId = await Review.findByPk(selectedReview)
    const reviewOwner = reviewId.userId;


    if(!reviewId){
        res.status(404).json({
            "message": "Review couldn't be found"
        })
    }
    if(reviewOwner !== currentUser){
        res.status(403).json({
            "message": "Current user is prohibited from accessing the selected data"
        })
    }
    const { review, stars } = req.body;
    let errors = {}
    if(review !== undefined){
        if(review.trim() === '') errors.review = 'Review text is required';
        else reviewId.review = review;
    }
    if(stars !== undefined){
        if(stars > 5 || stars < 1) errors.stars = 'Stars must be an integer from 1 to 5';
        else reviewId.stars = stars
    }

    if(errors.length > 0) return res.status(400).json({errors})
    if(Object.keys(errors).length > 0){
        return res.status(400).json({
            "message": "Bad Request",
            "errors": errors
        })
    }
    const editedReview = await reviewId.save()
    return res.json(editedReview)
})


router.delete('/:reviewId', requireAuth, async (req, res, next) => {
    const reviewId = req.params.reviewId
    const review = await Review.findByPk(reviewId, {
        include: [
            {
                model: User
            }
        ]
    });
    if(!review){
        return res.status(404).json({
            "message": "Spot couldn't be found"
           })
    }
    const owner = review.User.id;
    const currentUser = req.user.id;
    if(owner !== currentUser){
        res.status(403).json({
            "message": "Current user is prohibited from accessing the selected data"
        })
    }
    await review.destroy();
    return res.json({
        "message": "Successfully deleted"
    })
})




module.exports = router
