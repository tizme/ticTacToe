angular.module('ionicApp.controllers', [])
.controller('gameCtrl', function($scope, $rootScope, $ionicPopup) {
  var clicked = 0;
  var gameBoard = [null,null,null,null,null,null,null,null,null]
$scope.move = function(location){
  clicked ++;
  console.log('area clicked', location);
  console.log('count', clicked);
  console.log(gameBoard);
  if (gameBoard[location] == null){
    var turn = (clicked % 2)
    if(turn == 1){
      gameBoard[location]="X"
      console.log("would create an X");
      $("#"+location+"").text("X");
      $("#"+location+"").addClass("red");
    }
    else{
      gameBoard[location]="O"
      console.log("would create an O");
      $("#"+location+"").text("O");
      $("#"+location+"").addClass("blue");
    }
    console.log(gameBoard);
    checkForWin()
  }
  else{
    clicked -= 1
  }
}
checkForWin = function(){
  var win=false;
  if (gameBoard[0]!=null&&gameBoard[0]==gameBoard[1]&&gameBoard[0]==gameBoard[2]){
    win=true;
    player=gameBoard[0]
    console.log("Winner!1");
  }
  else if (gameBoard[0]!=null&&gameBoard[0]==gameBoard[4]&&gameBoard[0]==gameBoard[8]){
    win=true;
    player=gameBoard[0]
    console.log("Winner!2");
  }
  else if (gameBoard[0]!=null&&gameBoard[0]==gameBoard[3]&&gameBoard[0]==gameBoard[6]){
    win=true;
    player=gameBoard[0]
    console.log("Winner!3");
  }
  else if (gameBoard[1]!=null&&gameBoard[1]==gameBoard[4]&&gameBoard[1]==gameBoard[7]){
    win=true;
    player=gameBoard[1]
    console.log("Winner!4");
  }
  else if (gameBoard[2]!=null&&gameBoard[2]==gameBoard[4]&&gameBoard[2]==gameBoard[6]){
    win=true;
    player=gameBoard[2]
    console.log("Winner!5");
  }
  else if (gameBoard[2]!=null&&gameBoard[2]==gameBoard[5]&&gameBoard[2]==gameBoard[8]){
    win=true;
    player=gameBoard[2]
    console.log("Winner!6");
  }
  else if (gameBoard[3]!=null&&gameBoard[3]==gameBoard[4]&&gameBoard[3]==gameBoard[5]){
    win=true;
    player=gameBoard[3]
    console.log("Winner!7");
  }
  else if (gameBoard[6]!=null&&gameBoard[6]==gameBoard[7]&&gameBoard[6]==gameBoard[8]){
    win=true;
    player=gameBoard[6]
    console.log("Winner!8");
  }
  else if(clicked == 9){
    console.log("Cat's game");
    showTie = function(){
    var winPopup = $ionicPopup.alert({
      title: "Cat's Game",
      template: "Start a new game?",
      okText: "New Game"
      });
      winPopup.then(function(res){
        resetGame()
      })
    }
    showTie()
  }
  if(win){
    console.log("reached if win");
    showWin = function(){
    var winPopup = $ionicPopup.alert({
      title: "Player "+player+" wins!",
      template: "Start a new game?",
      okText: "New Game"
      });
      winPopup.then(function(res){
        resetGame()
      })
    }
    showWin()
      }
}

resetGame = function(){
  console.log("hit reset game");
  clicked = 0;
  for (i=0; i<10; i++){
    $("#"+i+"").text("")
  }
  gameBoard = [null,null,null,null,null,null,null,null,null]
}
})
