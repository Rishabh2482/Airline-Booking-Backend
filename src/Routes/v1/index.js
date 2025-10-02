const express = require('express');
const {servercheck} =require('../../Controller')
const airplaneRoutes = require('./airplane-routes')
const router = express.Router();

// ->       http://localhost:3000/api/v1/server-check
router.get('/server-check',servercheck);

// ->        /api/v1/airplanes
router.use('/airplanes', airplaneRoutes)

module.exports = router;