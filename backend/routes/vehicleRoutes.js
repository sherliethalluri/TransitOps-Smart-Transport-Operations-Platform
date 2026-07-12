const express = require("express");
const router = express.Router();

const {
  addVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Add Vehicle
router.post("/", protect, authorize("Admin", "Manager"), addVehicle);

// Get All Vehicles
router.get("/", protect, getVehicles);

// Get Vehicle By ID
router.get("/:id", protect, getVehicleById);

// Update Vehicle
router.put("/:id", protect, authorize("Admin", "Manager"), updateVehicle);

// Delete Vehicle
router.delete("/:id", protect, authorize("Admin"), deleteVehicle);

module.exports = router;