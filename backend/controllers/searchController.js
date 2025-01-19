const Doctor = require('../models/Doctor');

// Search doctors by query params
const searchDoctors = async (req, res) => {
  const { city, state, area, expertise } = req.query;

  try {
    const query = {};

    if (city) query.city = city;
    if (state) query.state = state;
    if (area) query.area = area;
    if (expertise) query.expertise = expertise;

    const doctors = await Doctor.find(query);

    return res.json(doctors);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { searchDoctors };
