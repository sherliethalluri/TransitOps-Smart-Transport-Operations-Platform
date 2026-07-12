const express = require("express");
const router = express.Router();

const {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post("/", protect, authorize("Admin", "Manager"), createTrip);

router.get("/", protect, getTrips);

router.get("/:id", protect, getTripById);

router.put("/:id", protect, authorize("Admin", "Manager"), updateTrip);

router.delete("/:id", protect, authorize("Admin"), deleteTrip);

module.exports = router;