const express = require("express");
const router = express.Router();

const Customers = require("../../classes/Customers");

/**
 * @route POST api/customers/create
 * @desc Create new customer
 * @access public
 */
router.post("/create", (req, res) => {
  if (req.body.email) {
    req.body.ip = req.ip;
    Customers.createCustomer(req.body).then(() => {
      Customers.getAllCustomers().then(customers => res.json(customers));
    });
  } else {
    res.json({ error: "Please enter email" });
  }
});

/**
 * @route GET api/customers
 * @desc Get customer detailes
 * @access public
 */
router.get("/", (req, res) => {
  if (!req.body) {
    Customers.getAllCustomers().then(customers => res.json(customers));
  } else {
    Customers.searchCustomers(req.query).then(customers => res.json(customers));
  }
});

/**
 * @route PATCH api/customers
 * @desc Edit customer detailes
 * @access public
 */
router.patch("/:id", (req, res) => {
  if (req.body.email) {
    Customers.getCustomerById(req.params.id).then(customer => {
      customer.update(req.body).then(() => {
        Customers.getAllCustomers().then(customers => {
          res.json(customers);
        });
      });
    });
  } else {
    res.json({ error: "Please enter email" });
  }
});

/**
 * @route DELETE api/customers
 * @desc Delete customer
 * @access public
 */
router.delete("/:id", (req, res) => {
  Customers.getCustomerById(req.params.id).then(customer => {
    customer.destroy().then(() => {
      Customers.getAllCustomers().then(customers => {
        res.json(customers);
      });
    });
  });
});

module.exports = router;
