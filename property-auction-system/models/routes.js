const express = require("express");
const router = express.Router();
const { Property, User } = require("../models");

// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.findAll({ include: "Seller" });
  res.json(properties);
});

// Add a new property
router.post("/", async (req, res) => {
  const { Title, Description, Location, Image, BasePrice, SellerID } = req.body;
  const newProperty = await Property.create({ Title, Description, Location, Image, BasePrice, SellerID });
  res.json(newProperty);
});

module.exports = router;
