const express = require('express');
const {servercheck} =require('../../Controller')
const router = express.Router();

// ->       http://localhost:3000/api/v1/server-check
router.get('/server-check',servercheck);

module.exports = router;