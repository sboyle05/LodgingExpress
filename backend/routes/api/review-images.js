const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')

const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize } = require('../../db/models');
const router = express.Router();



router.delete('/:imageId', requireAuth, async (req, res, next) => {
        const imageId = req.params.imageId;
        const image = await ReviewImage.findByPk(imageId, {
            include: [
                {
                    model: Review
                }
            ]
        })
        if(!image){
            return res.status(404).json({
                "message": "Review Image couldn't be found"
               })
        }
        const currentUser = req.user.id;
        const userId = image.Review.userId;
        if(currentUser !== userId){
            res.status(403).json({
                "message": "Current user is prohibited from accessing the selected data"
            })
        }
        await image.destroy();
        return res.json({
            "message": "Successfully deleted"
        })

})










module.exports = router
