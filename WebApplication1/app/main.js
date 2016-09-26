var app = angular.module('app',['ngRoute'])

app.controller("people", function ($scope, $http) {
    $http.get("database.json")
    .success(function (response) {
        $scope.persons = response.records;
    });
});

app.config(function ($routeProvider) {
    $routeProvider
    .when('/table', {
        templateUrl: "templates/table.html"
    })
    .when('/register', {
        templateUrl: "templates/register.html"
    })
    .when('/home', {
        templateUrl: "templates/mainPage.html"
    })
    .otherwise({
        templateUrl: 'templates/mainPage.html'
    });
});

$scope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
};