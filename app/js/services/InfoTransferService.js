'use strict';

brimApp.service('infoTransferService', function() {

  self = this

  self.info = []

  self.addInfo = function(item) {
    self.info.push(item)
  }

  self.resetInfo = function() {
    self.info.length = 0
  }

});
