const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Review = require("../models/Reviews");

// @route  GET /reviews
// @desc   Get medium reviews
// @access Public
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });

    if (!reviews) {
      return res.status(404).json({ msg: "No reviews found" });
    }
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST /add-review/userId
// @desc   Create a post
// @access Private
router.post(
  "/add-review/:id",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("body", "Text is required"),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newReview = new Review({
        name: user.name,
        title: req.body.title,
        body: req.body.body,
        rating: req.body.rating,
        user: req.user.id,
      });

      const review = await newReview.save();
      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
