const express = require('express')
const { check } = require('express-validator');
const{requireAuth} = require('../../utils/auth')

const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, ReviewImage, sequelize } = require('../../db/models');

const router = express.Router();









module.exports = router
