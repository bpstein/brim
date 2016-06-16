'use strict';

brimApp.controller("brimAppController", ['$scope', 'GetTagsService','GetImagesByTagService', function($scope, GetTagsService, GetImagesByTagService) {

    var self = this;

    self.getResponseSuccess = function(scope, res, err) {
      if (res.meta.code !== 200) {
        scope.error = res.meta.error_message;
        // scope.error = res.meta.error_type + ' | ' + res.meta.error_message;
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
			self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      self.tags = response.data;
		  });
    }

    self.getImagesByTags = function(tag) {
		GetImagesByTagService.get(tag).success(function(response) {
			self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      self.images = response.data;
		  });
    }
}]);
