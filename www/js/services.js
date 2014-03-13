// JavaScript Document
angular.module('brain.services', [])

.factory('TestData', function($http, $rootScope) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions=[];
  $http.get('parem.json').success(function(data) {
questions = data;
});
  return {
    all: function() {
		return questions;
    },
	get: function(quesId) {
      // Simple index lookup
      return questions[quesId];
    }
  };
})