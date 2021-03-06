// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'templates/game.html',
      controller: 'gameCtrl'
    })
    $urlRouterProvider.otherwise("/");
});
