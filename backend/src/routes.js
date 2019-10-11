const express = require('express')
const multer = require('multer')

const uploadConfig = require('./configs/upload')
const SessionControlleter = require('./controllers/SessionController')
const SpotControlleter = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/spots', SpotControlleter.index)
routes.post('/spots/:spot_id/bookings', BookingController.store)
routes.post('/spots', upload.single('thumbnail'), SpotControlleter.store)

routes.post('/sessions', SessionControlleter.store)

routes.get('/dashboard', DashboardController.show)

module.exports = routes

