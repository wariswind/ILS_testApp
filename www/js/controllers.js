// JavaScript Document
angular.module('brain.controllers', [])

.controller('MainCtrl', function($scope,$rootScope,$location,TestData) {
	$scope.leftButtons = [{
    type: 'button-assertive',
	content: '<i class="icon ion-ios7-gear dark"></i> Settings',
    tap: function(e) {
      
    }
  }];
  $scope.newGame = function() {
   $scope.questions=TestData.all();
  $rootScope.$broadcast('handleAllFuel',$scope.questions);
  
        $location.path('/game/newgame');
  };
  
})

.controller('SideCtrl', function($scope, $ionicSideMenuDelegate,TestData) {
  $scope.leftButtons = [{
    type: 'button-assertive',
	content: 'Levels',
    tap: function(e) {
      $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
    }
  }];
  
})
.controller('NewGameCtrl', function($scope,$rootScope,$timeout,$location,$ionicLoading,TestData) {
	$scope.val=0;
	$scope.show = function() {

    // Show the loading overlay and text
    $scope.loading = $ionicLoading.show({

      // The text to display in the loading indicator
      content: 'Loading',

      // The animation to use
      animation: 'fade-in',

      // Will a dark overlay or backdrop cover the entire view
      showBackdrop: true,

      // The maximum width of the loading indicator
      // Text will be wrapped if longer than maxWidth
      maxWidth: 200
	 
    });
	$scope.hide = function(){
    $scope.loading.hide();
  };
	};
	$scope.questions=TestData.get(0);
	$scope.myValue="false";
	$scope.failHid="true";
	$scope.myValue2="true";
	$scope.answerChange = function(item) {
		if(item==$scope.questions.answer){
			
			$scope.myValue="true";
			$scope.myValue2="false";
	$scope.val +=1;
	if($scope.val>4)
	$scope.val =0;	
    $scope.questions=TestData.get($scope.val);
	$timeout(function(){$scope.myValue="false",$scope.myValue2="true";}, 2000);
		}
		else{
			$scope.myValue="true";
			$scope.failHid="false";
		}
  };
  $scope.continueTest=function(){
	  $scope.myValue="false";
	$scope.failHid="true";
  }
  $scope.goback=function(){
	  $location.path('/home');
  }
	
})