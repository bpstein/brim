'use strict';

angular.module("brimApp")
  .controller("brimAppController", ['$scope', 'GetTagsFactory', function($scope, GetTagsFactory) {
    var self = this;

    // var gettagSuccess = function(scope, res) {
    //   if (res.meta.code !== 200) {
    //     scope.error = res.meta.error_type + ' | ' + res.meta.error_message;
    //     return;
    //   }
    //   if (res.data.length > 0) {
    //     self.tags = res.data;
    //   } else {
    //     scope.error = "This hashtag has returned no results";
    //   }
    // };

    self.getTags = function(tagsearch) {
		GetTagsFactory.get(tagsearch).success(function(response) {
			self.tags = response.data;
		});
  }
}]);
