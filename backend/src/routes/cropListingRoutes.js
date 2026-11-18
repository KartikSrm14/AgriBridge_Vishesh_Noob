
const express = require("express");
const router = express.Router();

const {
  getAvailableCropListings,
  createCropListing,
} = require("../controllers/cropListingController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.get("/", getAvailableCropListings);

router.post(
  "/",
  protect,
  authorize("farmer"),
  createCropListing
);

module.exports = router;
