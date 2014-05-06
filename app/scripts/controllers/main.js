'use strict';
console.log('main');

angular.module('ngexpressApp')
    .controller('MainCtrl', function($scope, $http, $templateCache) {

        //call for data 
        $http.get('/api/awesomeThings').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        //get the template
        console.log('MainCtrl');
        $http.get('partials/template').success(function(data) {
            $templateCache.put('partials/template', data);
            console.log($templateCache);
            console.log($templateCache.get('partials/template'));
        });



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