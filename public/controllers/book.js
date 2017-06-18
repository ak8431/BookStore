app.controller('bookcontroller', ['$scope', '$routeParams', '$location', '$http', '$route', function($scope, $routeParams, $location, $http, $route){
	$scope.getBooks = function(){
		$http.get('/api/allBooks').then(function(response){
			$scope.books = response.data;
			// $route.reload();
		}, function(response){
			console.log('Error Fetching Books ' + response);
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/book/'+id).then(function(response){
			console.log(response.data[0]);
			$scope.bookDetails = response.data[0];
			console.log("Book Fetched");
		}, function(response){
			console.log('Error Fetching Books ' + response);
		});
	}

	$scope.addBook = function(){
		$http.post('/api/book', $scope.book).then(function(response){
			$scope.books = response.data;
			console.log($scope.books);
			$location.path('/');
		}, function(response){
			console.log('Error Fetching Books ' + response);
		});
	}

	$scope.deleteBook = function(){
		var id = $routeParams.id;
		$http.delete('/api/book/'+id).then(function(response){
			$scope.books = response.data;
			console.log("Book Deleted Successfully");
			$location.path('/');
		}, function(response){
			console.log('Error Deleting Book ' + response.err);
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/book/'+id, $scope.bookDetails).then(function(response){
			console.log("Book Updated Successfully");
			$location.path('/');
		}, function(response){
			console.log('Error Updating Book ' + response);
		});
	}

}]);