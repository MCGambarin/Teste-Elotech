app.controller("listaController", function($scope, $http, $location){
	$scope.maxSize = 12;
	$scope.bigCurrentPage = 1;      		

    $scope.pageChanged = function() {
    	$scope.buscarRepositorios();
    }; 

	$scope.buscarRepositorios = function(){
		$http.get("https://api.github.com/search/repositories?q=is:public&page="+ $scope.bigCurrentPage + "&per_page=12&").then(function (response) {
    		$scope.lista = response.data;
    		if($scope.bigTotalItems == undefined)
    			$scope.bigTotalItems = parseInt($scope.lista.total_count);	
		});
	};

});