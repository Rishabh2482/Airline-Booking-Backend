const express = require("express");
const { AirplaneController } = require('../../Controller')

const router = express.Router();

router.post('/', AirplaneController.createAirplane);

module.exports = router;