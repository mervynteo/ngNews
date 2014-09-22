app.controller('NavCtrl', function($scope, $location, Post, Auth) {
	$scope.post = {url: 'http://', title: ''};

	$scope.addPost = function() {
		Post.create($scope.post).then(function(ref) {
			$location.path('/posts/' + ref.name());
			$scope.post = {url: 'http://', title: ''};
		});
	};

	$scope.logout = function() {
		Auth.logout();
	}

});