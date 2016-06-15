'use strict';

brimApp.controller("brimAppController", ['$scope', 'GetTagsService',function($scope, GetTagsService) {

    var self = this;

    $scope.test="testing scope"
    var getResponseSuccess = function(scope, res, err) {
      if (res.meta.code !== 200) {
        scope.error = res.meta.error_type + ' | ' + res.meta.error_message;
        return;
      }
      if (res.data.length > 0) {
        return;
      } else {
        scope.error = err;
      }
    };

    self.getTags = function(tagsearch) {
		GetTagsService.get(tagsearch).success(function(response) {
			getResponseSuccess($scope, response, "This hashtag has returned no results" )
      self.tags = response.data;
		});
  }
}]);
