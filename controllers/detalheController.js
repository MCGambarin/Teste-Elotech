app.controller("detalheController", function($scope, $routeParams, $http){

	$scope.buscarRepositorios = function(){
		$http.get("https://api.github.com/repos/" + $routeParams.owner + "/" + $routeParams.repo).then(function (response) {
    		$scope.detalhe = response.data;
		});
	};
});
