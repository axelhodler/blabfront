'use strict';

var Overview = function() {
  this.firstTokenAmountInList = function() {
    return element(by.id('overview_tokenamount_0')).getText();
  };
};

module.exports = Overview;