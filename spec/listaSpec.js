describe('listaController', function() {
 	beforeEach(angular.mock.module('testeApp'));
	var $controller;

	beforeEach(inject(function(_$controller_){
	$controller = _$controller_;
	}));

    it("Lista deve ter pelo menos 1 elemento", function() {
		var $scope = {};
		var controller = $controller('listaController', { $scope: $scope });
		expect($scope.lista.length > 0).toBe(true);
    });
});