(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  util.format("http://catalogue%s", domain),
    tagsUrl:       util.format("http://catalogue%s/tags", domain),
    cartsUrl:      util.format("http://carts:8080%s/carts", domain),
    ordersUrl:     util.format("http://orders-front%s", domain),
    customersUrl:  util.format("http://user:8080%s/customers", domain),
    addressUrl:    util.format("http://user:8080%s/addresses", domain),
    cardsUrl:      util.format("http://user:8080%s/cards", domain),
    loginUrl:      util.format("http://user:8080%s/login", domain),
    registerUrl:   util.format("http://user:8080%s/register", domain),
  };
}());
