const Doctor = require('../models/Doctor');

// Create a new doctor
const createDoctor = async (req, res) => {
  const { name, email, phone, city, state, area, expertise } = req.body;

  try {
    const newDoctor = new Doctor({ name, email, phone, city, state, area, expertise });
    await newDoctor.save();
    return res.status(201).json({ message: 'Doctor created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.json(doctors);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createDoctor, getDoctors };
