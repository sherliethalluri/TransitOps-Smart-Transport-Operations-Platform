const User = require("../models/User");

// Get All Drivers
const getDrivers = async (req, res) => {
  try {
    const drivers = await User.find({ role: "Driver" }).select("-password");

    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Driver By ID
const getDriverById = async (req, res) => {
  try {
    const driver = await User.findOne({
      _id: req.params.id,
      role: "Driver",
    }).select("-password");

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Driver
const updateDriver = async (req, res) => {
  try {
    const driver = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        role: "Driver",
      },
      req.body,
      { new: true }
    ).select("-password");

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json({
      message: "Driver updated successfully",
      driver,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Driver
const deleteDriver = async (req, res) => {
  try {
    const driver = await User.findOneAndDelete({
      _id: req.params.id,
      role: "Driver",
    });

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json({
      message: "Driver deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
};