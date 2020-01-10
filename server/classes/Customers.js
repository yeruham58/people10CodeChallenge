const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Customers extends Sequelize.Model {
  static associate(models) {}

  static createCustomer(newCustomer) {
    return Customers.create(newCustomer);
  }

  static getAllCustomers() {
    return Customers.findAll();
  }

  static searchCustomers(searchParams) {
    return Customers.findAll({ where: searchParams });
  }

  static getCustomerById(cutomerId) {
    return Customers.findOne({ where: { id: cutomerId } });
  }
}

Customers.init(
  {
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    ip: Sequelize.STRING,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT
  },
  { sequelize, modelName: "Customers" }
);

module.exports = Customers;
