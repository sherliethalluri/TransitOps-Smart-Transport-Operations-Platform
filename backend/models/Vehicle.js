const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Bus", "Van", "Truck", "Car"],
    },

    brand: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    fuelType: {
      type: String,
      required: true,
      enum: ["Diesel", "Petrol", "Electric", "CNG"],
    },

    status: {
      type: String,
      enum: ["Available", "On Trip", "Maintenance", "Inactive"],
      default: "Available",
    },

    assignedDriver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);