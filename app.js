(function(module){
  module.controller('mainCtrl',mainCtrl);
  function mainCtrl($timeout,flickrService){

    var vm = this;
    vm.appName = "My Slider";
    vm.images = [];

    flickrService.getImages().success(function(result) {
      vm.images = result.query.results.photo;
      console.log(vm.images)
    });
  }
})(angular.module('myApp',[]));
