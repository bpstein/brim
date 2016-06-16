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

    self.chosenTags = [];
    self.images = [];

    self.searchMultipleTags = function() {
      self.images = []
      self.chosenTags.forEach(function(tag){
        self.getImagesByTags(tag)
      })
    };

    self.saveTag = function(tag) {
      if(self.chosenTags.includes(tag) === false) {self.chosenTags.push(tag)};
    };

    self.removeTag = function(tag) {
      if(self.chosenTags.includes(tag)){
        var ind = self.chosenTags.indexOf(tag);
        self.chosenTags.splice(ind, 1);
      }
    };

    self.getTags = function(tagsearch) {
		GetTagsService.get(tagsearch).success(function(response) {
			self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      self.tags = response.data;
		  });
    }

    self.getImagesByTag = function(tag) {
      self.images = []
  		GetImagesByTagService.get(tag).success(function(response) {
  			self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
        self.images = response.data;
      });
    }

    self.getImagesByTags = function(tag) {
      self.images = []
      GetImagesByTagService.get(tag).success(function(response) {
        self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
        response.data.forEach(function(object){
            self.images.push(object)
        })
      });
    }
}]);
