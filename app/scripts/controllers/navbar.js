'use strict';

angular.module('ngexpressApp')
    .controller('NavbarCtrl', function($scope, $location) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });
angular.module('ngexpressApp')
    .controller('Page1Ctrl', function($scope, $http) {
        $http.get('/api/awesomeThings').success(function(data) {
            $scope.awesomeThings = data;
        });
        $http.get('/api/awesomeThings2').success(function(data) {
            $scope.awesomeThings2 = data;
        });
    });