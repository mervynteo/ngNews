'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, Post, User) {
	$scope.user = User.findByUsername($routeParams.username);
	
	$scope.posts = {};

  $scope.user.$loaded(function () {
    populatePosts();
  });

  function populatePosts () {
    var posts = User.posts($routeParams.username).$asArray();

    posts.$loaded(function (){
      angular.forEach(posts, function (post){
        $scope.posts[post.$id] = Post.find(post.$id);
      });
    });
  }

});