const express = require("express");
const router = express.Router();

/**
 * @route GET api/csv
 * @desc Marge csv files, and returnd merged object to client
 * @access public
 */
router.get("/csv", (req, res) => {
  console.log("gonna merge");
});

module.exports = router;
