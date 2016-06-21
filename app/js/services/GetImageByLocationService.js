'use strict';

brimApp.service('GetImageByLocationService', ['$http', function($http) {
    var base = "https://api.instagram.com/v1";
    var access_token = 'access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57';
    // var lat = "51.391685051103&";
    // var long = "0.024696467227784&";
    var locationId;

    return {
      'get': function(lat,lng) {
        var lat = lat+"&";
        var lng = lng+"&";
        var locationId;

        var idRequest = "/locations/search?lat="+ lat + "lng=" + lng + access_token ;
        var idUrl = base + idRequest;
        var config = {
          'params': {
            'callback': 'JSON_CALLBACK'
          }
        };
        return $http.jsonp(idUrl, config).then(function(response){
          locationId = response.data.data[0].id;
          var imageRequest = "/locations/" + locationId + "/media/recent?" + access_token
          var imageUrl = base + imageRequest
          return $http.jsonp(imageUrl, config).then(function(response){
            return response.data
          });
        });
      }
    };
  }
]);