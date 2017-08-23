var app = angular.module('testeApp', ["ngRoute", 'ui.bootstrap']);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/lista.html"
    })
    .when("/detalhes/:url", {
        templateUrl : "views/detalhes.html",
        controller : "detalheController"
    })
});
