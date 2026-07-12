const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Remove "Bearer " from the token
    const actualToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    // Verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // Save user info in request
    req.user = decoded;

    // Continue to the next function
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = protect;