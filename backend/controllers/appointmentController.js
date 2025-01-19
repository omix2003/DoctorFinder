const Appointment = require('../models/appointment');

// Create a new appointment
const createAppointment = async (req, res) => {
  const { doctorId, userId, appointmentDate, reason } = req.body;

  try {
    const newAppointment = new Appointment({
      doctorId,
      userId,
      appointmentDate,
      reason,
    });

    await newAppointment.save();
    return res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.json(appointments);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createAppointment, getAppointments };
