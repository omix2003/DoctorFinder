const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const authenticateUser = require('../middlewares/authMiddleware');

router.post('/', authenticateUser, createAppointment);
router.get('/', authenticateUser, getAppointments);

module.exports = router;
