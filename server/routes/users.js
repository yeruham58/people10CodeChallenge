const express = require("express");
const router = express.Router();

/**
 * @route POST api/users/create
 * @desc Create new user
 * @access public
 */
router.post("/create", (req, res) => {
  console.log("gonna create");
});

/**
 * @route GET api/users
 * @desc Get user detailes
 * @access public
 */
router.get("/users", (req, res) => {
  console.log("gonna search for users");
});

/**
 * @route PATCH api/users
 * @desc Edit user detailes
 * @access public
 */
router.patch("/:id", (req, res) => {
  console.log("gonna edit");
});

/**
 * @route DELETE api/users
 * @desc Delete user
 * @access public
 */
router.get("/users/:id", (req, res) => {
  console.log("gonna delete");
});

module.exports = router;
