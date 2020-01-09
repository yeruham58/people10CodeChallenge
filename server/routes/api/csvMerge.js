const express = require("express");
const router = express.Router();
const csv = require("csvtojson");

const map1Path = "/Users/pro/Desktop/etlCsvFiles/map1.csv";
const map2Path = "/Users/pro/Desktop/etlCsvFiles/map2.csv";
const data1Path = "/Users/pro/Desktop/etlCsvFiles/data1.csv";
const data2Path = "/Users/pro/Desktop/etlCsvFiles/data2.csv";

const pathList = [map1Path, map2Path, data1Path, data2Path];

var map1json, map2json, data1json, data2json;

for (const path of pathList) {
  csv()
    .fromFile(path)
    .then(jsonObj => {
      switch (true) {
        case path === map1Path:
          map1json = jsonObj[0];
          break;
        case path === map2Path:
          map2json = jsonObj[0];
          break;
        case path === data1Path:
          data1json = jsonObj;
          break;
        case path === data2Path:
          data2json = jsonObj;
          break;
      }
    });
}

const mergeJsonLists = () => {
  const mergedList = [];
  for (const dataFile of [data1json, data2json]) {
    var map = dataFile === data1json ? map1json : map2json;
    for (const customer of dataFile) {
      newCustomer = {
        created_at: customer[map.created_at],
        first_name: customer[map.first_name],
        last_name: customer[map.last_name],
        email: customer[map.email],
        latitude: customer[map.latitude],
        longitude: customer[map.longitude],
        ip: customer[map.ip]
      };
      mergedList.push(newCustomer);
    }
  }
  return mergedList;
};

/**
 * @route GET api/csv
 * @desc Merge csv files, and returnd merged object to client
 * @access public
 */
router.get("/", (req, res) => {
  const mergedList = mergeJsonLists();
  res.json({ mergedList });
});

module.exports = router;
