angular.module('ionicApp.controllers', [])
.controller('gameCtrl', function($scope, $rootScope) {
  var clicked = 0;
$scope.move = function(){
  clicked ++;
  console.log('area clicked', clicked);
  var turn = (clicked % 2)
  if(turn == 1){
    console.log("would create an X");
  }
  else{
    console.log("would create an O");
  }
}
})
