const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const propertyRoutes = require("./routes/property");
app.use("/properties", propertyRoutes);

// Sync Database
db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
});
