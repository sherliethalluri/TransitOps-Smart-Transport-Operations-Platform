const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");
const vehicleRoutes = require("./routes/vehicleRoutes");
require("dotenv").config();



const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);

app.get("/api/protected", protect, (req, res) => {
    res.json({
        message: "You accessed a protected route!",
        user: req.user,
    });
});


app.get("/", (req, res) => {
  res.send("🚀 TransitOps Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
