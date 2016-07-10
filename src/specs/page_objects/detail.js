'use strict';

var DetailPage = function() {
  this.currentBalance = function() {
    return element(by.id('details_current_balance')).getText();
  };
};

module.exports = DetailPage;