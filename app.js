var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home_template',
            controller: 'HomeController'
        })

        .when('/footer', {
            templateUrl: 'footer_template',
            controller: 'FooterController'
        })

        .when('/review', {
            templateUrl: 'review_template',
            controller: 'ReviewController'
        })

        .when('/faq', {
            templateUrl: 'faq_template',
            controller: 'FAQController'
        })

        .when('/services', {
            templateUrl: 'service_template',
            controller: 'ServiceController'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function ($scope) {
});

app.controller('FooterController', function ($scope) {
});

app.controller('ReviewController', function ($scope) {
});

app.controller('FAQController', function ($scope) {
});

app.controller('ServiceController', function ($scope) {
});
