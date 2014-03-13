// JavaScript Document
angular.module('brain', ['ionic','LocalStorageModule', 'brain.controllers','brain.services'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('gameBody', {
      url: "/game",
      abstract: true,
      templateUrl: "templates/sidebar.html",
	  controller:"SideCtrl"
    })

    // the pet tab has its own child nav-view and history
    .state('homeApp', {
      url: "/home",
      templateUrl: "templates/home.html",
	  controller:"MainCtrl"
    })
	.state('gameBody.newgame', {
      url: "/newgame",
      views: {
        'menuContent' :{
          templateUrl: "templates/test.html",
		  controller: 'NewGameCtrl'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('home');

});

