'use strict';

brimApp.service('GetTagsService', ['$http', function($http){

	var self = this;

	self.getrel = function(tagsearch){
    var arr = [];

		return $http.jsonp('https://api.instagram.com/v1/tags/search?q=' +tagsearch+'&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK').then(function(responseJSON){
      return responseJSON.data
	  });
  };
}]);
