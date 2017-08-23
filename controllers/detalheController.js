app.controller("detalheController", function($scope, $routeParams){
	console.log("teste");
	console.log($routeParams.url);
	$scope.detalhe = "este é o detalhe";
});
