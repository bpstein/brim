'use strict';

brimApp.controller("InstagramController", ['testService', '$scope', 'GetTagsService','GetImagesByTagService', 'GetImageByLocationService', 'locationFactory', function(testService, $scope, GetTagsService, GetImagesByTagService, GetImageByLocationService, locationFactory) {

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
    self.tags = [];


    self.searchMultipleTags = function(arg) {
      if(arg === 'or') {
        self.chosenTags.forEach(function(tag){
          self.getImagesByTags(tag)
        })
      }
      if(arg === 'and') {
        self.images = []
        GetImagesByTagService.get(self.chosenTags[0]).then(function(response) {
        self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
        response.data.forEach(function(image){
          var tagctr = 0;
          self.chosenTags.forEach(function(tag) {
            if(image.tags.includes(tag)){
              tagctr++;
            }
          })
          if(tagctr === self.chosenTags.length) {
            self.images.push(image)
          }
        })
      });
      }
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
    GetTagsService.get(tagsearch).then(function(response) {
      self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      self.tags = response.data;
      });
    }

    self.getImagesByTag = function(tag) {
      self.images = []
      // testService.resetInfo()
      GetImagesByTagService.get(tag).then(function(response) {
        self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
        self.images = response.data;
        response.data.forEach(function(item){
          testService.addInfo(new locationFactory(item.caption.from.username, item.caption.text, item.location.latitude, item.location.longitude, item.images.thumbnail.url))
        })
      });
    }

    self.getImagesByTags = function(tag) {
      self.images = []
      GetImagesByTagService.get(tag).then(function(response) {
        self.getResponseSuccess($scope, response, "This hashtag has returned no results" )
        return response.data.forEach(function(object){
          self.images.push(object)
        })
      });
    }

    self.getImageByLocation = function() {
      self.images = []
      GetImageByLocationService.get().then(function(response){
        response.data.forEach(function(object) {
          self.images.push(object)
        })
      });
    };

    self.searchTagsWithLocation = function(arg) {
      self.images = []
      GetImageByLocationService.get().then(function(response){
        response.data.forEach(function(image){
          var tagctr = 0;
          self.chosenTags.forEach(function(tag){
            if(image.tags.includes(tag)){
              if(arg === 'and'){
                tagctr++;
              }
              else {
                if(self.images.includes(image)===false){self.images.push(image)}
              }
            }
          })
          if(tagctr === self.chosenTags.length) {
            self.images.push(image)
          }
        })
      })
    }
}]);
