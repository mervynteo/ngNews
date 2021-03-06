'use strict';

app.controller('AuthCtrl', function($scope, $location, Auth, User) {
	if(Auth.signedIn()) {
		$location.path('/');
	}

	$scope.$on('$firebaseSimpleLogin:login', function() {
		$location.path('/');
	});

	$scope.login = function() {
		Auth.login($scope.user).then(function() {
			$location.path('/');
		}, function(error) {
			$scope.error = error.toString();
			console.log($scope.error);
		});
	}

	// $scope.register = function() {
	// 	Auth.register($scope.user).then(function(authUser) {
			
	// 		console.log(authUser);
	// 		console.log($scope.user);

	// 		Auth.login($scope.user).then(function() {
	// 			$location.path('/');				
	// 		}, function(error) {
	// 			$scope.error = error.toString();
	// 			console.log($scope.error);
	// 		});
	// 	});
	// };

	$scope.register = function() {
		Auth.register($scope.user).then(function(authUser) {
			User.create(authUser, $scope.user.username);
			Auth.login($scope.user).then(function() {
				$location.path('/');	
			});			
		}, function(error) {
			$scope.error = error.toString();
		});
	}

});