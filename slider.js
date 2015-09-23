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
      link:linkFunc,
      bindToController:true
    }
    return directive;
    sliderCtrl.$inject = ['$scope']

    function linkFunc(scope,el) {
      debugger;
      // body...
    }
    function sliderCtrl($scope) {
      var vm = this;
      vm.directiveName = "directive"
      vm.activeIndex = 0;
      vm.init = function(image,index){
        console.log(vm)
        image.isActive = (index == vm.activeIndex) ? true : false;
      }
      vm.next = function(){
        var currentIndex = vm.activeIndex;
        vm.activeIndex++;
        setCurrent(currentIndex);
      }
      vm.previous = function(){
        var currentIndex = vm.activeIndex;
        vm.activeIndex--;
        setCurrent(currentIndex);
      }
function setCurrent(currentIndex){
  if(vm.activeIndex>=vm.images.length)
      vm.activeIndex = 0;
  if(vm.activeIndex<0)
      vm.activeIndex = vm.images.length-1;

      vm.images[vm.activeIndex].isActive= true
      vm.images[currentIndex].isActive= false
}

    /*  $scope.$watch(angular.bind(vm,function(){
        return vm.images;
      }),function(newValue,oldValue){
        debugger;
      })
      */


    }
  }

})(angular.module('myApp'))
