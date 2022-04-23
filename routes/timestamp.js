const express = require('express')
const router = express.Router()
const controller = require('../controller/timestamp_controller')

router.get('/api/:input', controller.getTimestamp)
router.get('/api', controller.getCurrentTime)
router.get('/', controller.getHome)

module.exports = router