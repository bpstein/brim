'use strict';

brimApp.service('testService', ['$http', function($http) {

  self = this

  self.info = [{name:'wat'}]

  self.addInfo = function(item) {
    self.info.push(item)
  }

  self.resetInfo = function() {
    self.info = [{name:'wat'}]
  }

}]);




      // <ul>
      //   <li id="photo-list" ng-repeat="location in root.locations">
      //     {{location.name}}<br>{{location.caption}}<br>{{location.lat}}<br>{{location.lng}}<br>{{location.url}}
      //   </li>
      // </ul>