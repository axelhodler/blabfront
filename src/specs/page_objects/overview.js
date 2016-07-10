'use strict';

var Overview = function() {
  this.firstTokenAmountInList = function() {
    return element(by.id('overview_tokenamount_0')).getText();
  };

  this.enterFirstUsersDetails = function() {
    element(by.id('ledger_detailview_0')).click();
  };
};

module.exports = Overview;