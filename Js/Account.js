var app = angular.module("AngularApp", [])
app.controller("AccountController", function($scope, $http) {
    $http({
        method: "GET",
        url: "./Data/account.json"
    }).then(function mySucces(respone) {
        $scope.accounts = respone.data
    }, function myError(respone) {
        $scope.dataError = respone.statusText
    })

})