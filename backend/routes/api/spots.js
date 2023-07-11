const express = require('express')


const { User, Spot, SpotImage, Review, ReviewImage } = require('../../db/models');

const router = express.Router();

const reviewStars = Review.stars
const averageRating = (...reviewStars) =>{

}

router.get('/', async (req, res, next) => {
    const allSpots = await Spot.findAll({})
    res.json(allSpots)
})


router.get('/:spotId', async (req, res, next) => {
    const spotById = await Spot.findOne({
        where: {
            id: req.params.spotId
        }
    })
    res.json(spotById)
})

module.exports = router
