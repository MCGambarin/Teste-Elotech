var app = angular.module('testeApp', ["ngRoute", 'ui.bootstrap']);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/lista.html"
    })
    .when("/detalhes/:owner/:repo", {
        templateUrl : "views/detalhes.html",
        controller : "detalheController"
    })
});
