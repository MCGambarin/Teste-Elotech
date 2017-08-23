app.controller("listaController", function($scope, $http, $location){
	$scope.lista = "esta é a lista";


	$scope.maxSize = 12;
	$scope.bigCurrentPage = 1;
        		

    $scope.setPage = function (pageNo) {
    	$scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
    	$scope.buscarRepositorios();
    }; 

	$scope.buscarRepositorios = function(){
		console.log($scope.bigCurrentPage)
		$http.get("https://api.github.com/search/repositories?q=is:public&page="+ $scope.bigCurrentPage + "&per_page=12&").then(function (response) {
    		$scope.lista = response.data;
    		if($scope.bigTotalItems == undefined)
    			$scope.bigTotalItems = parseInt($scope.lista.total_count);
				
    		console.log($scope.lista);
		});
	};

});