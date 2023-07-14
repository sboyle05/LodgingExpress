const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')
const { Op } = require('sequelize')
const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize, Booking } = require('../../db/models');

const router = express.Router();


router.delete('/:imageId', requireAuth, async (req, res, next) => {
        const imageId = req.params.imageId;
        const image = await SpotImage.findByPk(imageId, {
            include: [
                {
                    model: Spot
                }
            ]
        });
        if(!image){
            return res.status(404).json({
                "message": "Spot Image couldn't be found"
            })
        }
        const currentUser = req.user.id;
        const owner = image.Spot.ownerId;

        if(currentUser !== owner){
            return res.status(403).json({
                "message": "Current user is prohibited from accessing the selected data"
            })
        }
        await image.destroy();
        return res.json({
            "message": "Successfully deleted"
        })
})






module.exports = router
