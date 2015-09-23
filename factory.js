(function (module) {
module.factory('flickrService',flickrService);
function flickrService ($http){
  var apiUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.interestingness(10)%20where%20api_key%3D%2292bd0de55a63046155c09f1a06876875%22%20and%20ispublic%3D1%3B&format=json&callback=';
  var dataFactory = {
    getImages : getImages
  }
  return dataFactory;
  function getImages(){
    return $http.get(apiUrl);
  }
}
})(angular.module('myApp'));
