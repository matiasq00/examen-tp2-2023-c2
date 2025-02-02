const customers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return customers.getAllCustomers(pageSize, page);
}

async function getCustomer(id) {
  return customers.getCustomer(id);
}

async function getCustomerByEmail(email) {
  return customers.getCustomerByEmail(email);
}

async function getCustomersWithFourAcc() {
  return customers.getCustomersWithFourAcc();
}

async function getCustomersWithLimit() {
  return customers.getCustomersWithLimit();
}

module.exports = {
  getAllCustomers,
  getCustomer,
  getCustomerByEmail,
  getCustomersWithFourAcc,
  getCustomersWithLimit,
};
