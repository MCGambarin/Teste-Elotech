var app = angular.module('testeApp', ["ngRoute"]);

app.controller("listaController", function($scope){

});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/detalhes", {
        templateUrl : "views/detalhes.html"
    });
})
