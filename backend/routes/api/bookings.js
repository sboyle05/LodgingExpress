const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')

const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize, Booking } = require('../../db/models');
const router = express.Router();



router.get('/current', requireAuth, async (req, res, next)=> {
    const currentUser = req.user.id;

    const allBookings = await Booking.findAll({
        where: {userId: currentUser},
        include: [
            {
                model: Spot,
            }
        ]
    })

    const bookingsWithSpotPreview = await Promise.all(
        allBookings.map(async (booking) => {
            const spot = booking.Spot;
            const images = await SpotImage.findAll({
                where : { spotId: spot.id },
            });

            return {
                ...booking.get(),
                Spot: {
                    id: spot.id,
                    ownerId: spot.ownerId,
                    address: spot.address,
                    city: spot.city,
                    state: spot.state,
                    country: spot.country,
                    lat: spot.lat,
                    lng: spot.lng,
                    name: spot.name,
                    description: spot.description,
                    price: spot.price,
                    previewImage: images.length > 0 ? images[0].url : null,
                }
            };
        })
    );

    res.json({ Bookings: bookingsWithSpotPreview });
})















module.exports = router
