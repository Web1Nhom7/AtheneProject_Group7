var app = angular.module("AngularApp", [])
app.controller("ProfileController", function($scope, $http) {
    $http({
        method: "GET",
        url: "../Data/profile.json"
    }).then(function mySucces(respone) {
        $scope.profiles = respone.data
    }, function myError(respone) {
        $scope.dataError = respone.statusText
    })
});