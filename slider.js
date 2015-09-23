(function (module) {
  module.directive('mySlider',mySlider);

  function mySlider() {
    var directive ={
      restrict:"EA",
      scope:{
        images :'=ngModel'
      },
      replace:true,
      templateUrl:"slider.tpl.html",
      controller:sliderCtrl,
      controllerAs:"sliderVm",

      bindToController:true
    }
    return directive;
    sliderCtrl.$inject = ['$scope']

    function link(scope,el) {
      debugger;
      // body...
    }
    function sliderCtrl($scope) {
      var vm = this;
      vm.directiveName = "directive"
      vm.activeIndex = 0;
      // body...
    }
  }

})(angular.module('myApp'))
