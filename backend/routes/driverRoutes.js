const express = require("express");
const router = express.Router();

const {
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Get All Drivers
router.get("/", protect, authorize("Admin", "Manager"), getDrivers);

// Get Driver By ID
router.get("/:id", protect, authorize("Admin", "Manager"), getDriverById);

// Update Driver
router.put("/:id", protect, authorize("Admin"), updateDriver);

// Delete Driver
router.delete("/:id", protect, authorize("Admin"), deleteDriver);

module.exports = router;
