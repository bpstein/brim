angular.module("brimApp")
.controller('DashboardController', function($rootScope, $scope, $element, locationFactory, NgMap, mapMarkerService, GetGeocodeService, GetTagsService, GetImagesByTagService, GetImageByLocationService, locationFactory) {

  $scope.locations = [];
  $scope.searchParam = [''];

  // Map Controller & Location Controller
  var mapEl = $element.find('gmap')[0];
  var mapOptions = {
    zoom: 13,
    center: {lat: 51.5020,lng: -0.1281},
    enableHighAccuracy: true
  };

  var gmap = new google.maps.Map(mapEl, mapOptions);
  $scope.gmap = gmap;


  // Instagram Controller
  $scope.resetMapImages = function() {
      $scope.locations = [];
    }

  $scope.getResponseSuccess = function(scope, res, err) {
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

  $scope.chosenTags = [];
  $scope.images = [];
  $scope.tags = [];
  $scope.testdata = [];


  $scope.tester = function(lat,lng) {
    GetImageByLocationService.get(lat,lng).then(function(response) {
      return response
    }).then(function(response){
      response.forEach(function(array){
        $scope.testdata.push(array)
      })
    });
  }

  $scope.searchByLocation = function(address) {
    $scope.addressList = []
    GetGeocodeService.getGeocode(address).then(function(response) {
      response.forEach(function(address) {
        $scope.addressList.push(address)
      })
    });
  };

  $scope.saveTag = function(tag) {
    if(Array.isArray($scope.searchParam)) {
      $scope.searchParam.push(tag);
    } 
    else {
      var array = $scope.searchParam.split(',');
      array.push(tag);
      $scope.searchParam = array; 
    }
  };

  $scope.removeTag = function(tag) {
    if($scope.chosenTags.includes(tag)){
      var ind = $scope.chosenTags.indexOf(tag);
      $scope.chosenTags.splice(ind, 1);
    }
  };

  $scope.getTags = function(tagsearch) {
    GetTagsService.get(tagsearch).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      $scope.tags = response.data;
    });
  }

  $scope.getImagesByTag = function(tag) {
    $scope.images = [];
    $scope.locations = [];
    GetImagesByTagService.get(tag).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      $scope.images = response.data;
      $scope.transferInfo(response.data)
    });
  }

  $scope.getImagesByTags = function(tag) {
    $scope.images = []
    $scope.locations = []
    GetImagesByTagService.get(tag).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      $scope.transferInfo(response.data)
      return response.data.forEach(function(object){
        $scope.images.push(object)
      })
    });
  }

  $scope.getImageByLocation = function(lat, lng) {
    $scope.images = []
    $scope.locations = []
    GetImageByLocationService.get(lat,lng).then(function(response){
      $scope.transferInfo(response.data)
      $scope.images = response.data
      response.forEach(function(object) {
        $scope.testdata.push(object)
      })
    });
  };

  $scope.searchMultipleTags = function(arg) {
    if(arg === 'or') {
      $scope.chosenTags.forEach(function(tag){
        $scope.getImagesByTags(tag)
      })
    }
    if(arg === 'and') {
      $scope.images = []
      GetImagesByTagService.get($scope.chosenTags[0]).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      response.data.forEach(function(image){
        var tagctr = 0;
        $scope.chosenTags.forEach(function(tag) {
          if(image.tags.includes(tag)){
            tagctr++;
          }
        })
        if(tagctr === $scope.chosenTags.length) {
          $scope.images.push(image)
        }
      })
    });
      $scope.transferInfo($scope.images)
    }
  };

  $scope.searchTagsWithLocation = function(arg) {
    $scope.images = []
    GetImageByLocationService.get().then(function(response){
      response.data.forEach(function(image){
        var tagctr = 0;
        $scope.chosenTags.forEach(function(tag){
          if(image.tags.includes(tag)){
            if(arg === 'and'){
              tagctr++;
            }
            else {
              if($scope.images.includes(image)===false){$scope.images.push(image)}
            }
          }
        })
        if(tagctr === $scope.chosenTags.length) {
          $scope.images.push(image)
        }
      })
    })
  }

  $scope.transferInfo = function(data) {
    data.forEach(function(item){
      $scope.locations.push(new locationFactory(item.caption.from.username,
                                                      item.caption.text,
                                                      item.location.latitude,
                                                      item.location.longitude,
                                                      item.images.thumbnail.url))
    })
  }

  $scope.optionsSet = function(bool) {
    if(bool === 'true') {$scope.options = 'true'};
    if(bool === 'false') {$scope.options = 'false'};
  }

  $scope.options = 'true';

});
