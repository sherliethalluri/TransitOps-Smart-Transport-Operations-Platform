const Vehicle = require("../models/Vehicle");
const User = require("../models/User");
const Trip = require("../models/Trip");

const getDashboard = async (req, res) => {
  try {
    const totalVehicles = await Vehicle.countDocuments();

    const availableVehicles = await Vehicle.countDocuments({
      status: "Available",
    });

    const maintenanceVehicles = await Vehicle.countDocuments({
      status: "Maintenance",
    });

    const totalDrivers = await User.countDocuments({
      role: "Driver",
    });

    const totalTrips = await Trip.countDocuments();

    const activeTrips = await Trip.countDocuments({
      status: "In Progress",
    });

    res.json({
      totalVehicles,
      availableVehicles,
      maintenanceVehicles,
      totalDrivers,
      totalTrips,
      activeTrips,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};