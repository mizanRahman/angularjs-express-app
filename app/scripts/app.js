'use strict';

angular.module('ngexpressApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'MainCtrl'
            })
            .when('/page1', {
                templateUrl: 'partials/page1',
                controller: 'Page1Ctrl'
            })
            .when('/t', {
                templateUrl: 'partials/template',
                controller: 'Page1Ctrl'

            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });