'use strict';

app.controller('PostsCtrl', function($scope, Post, $location) {		
	
	if($location.path() === '/') {
		$scope.posts = Post.all;	
	}
	
	$scope.post = {url: 'http://'};	

	$scope.deletePost = function(post) {
		Post.delete(post);
	};

});