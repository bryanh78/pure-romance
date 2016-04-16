angular.module("pure")
	.controller("romance", ["$scope", "$location", function($scope, $location) {
		var s = $scope
		var l = $location

		s.changeURL = function(local) {
			l.path(local)
		}

	}])