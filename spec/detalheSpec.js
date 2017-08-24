describe('detalheController', function() {
 	beforeEach(angular.mock.module('testeApp'));
	var $controller;

	beforeEach(inject(function(_$controller_){
	$controller = _$controller_;
	}));

    it("detalhe deve estar diferente de undefined", function() {
		var $scope = {};
		var controller = $controller('detalheController', { $scope: $scope });
		expect($scope.detalhe != undefined).toBe(true);
    });
});