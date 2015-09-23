(function(module){
  module.controller('mainCtrl',mainCtrl);
  function mainCtrl($timeout,flickrService){

    var vm = this;
    vm.appName = "My Slider";
    vm.images = [];

    flickrService.getImages().success(function(result) {
  prepareImages(result.query.results.photo);
      console.log(vm.images)
    });

    function prepareImages(images){
      angular.forEach(images,function(photo){
        vm.images.push({
          imageSrc:"https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_n.jpg",
          title:photo.title
        })
      })
    }
  }
})(angular.module('myApp',[]));
