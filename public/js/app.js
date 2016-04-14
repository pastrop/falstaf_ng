/*var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');*/


var app = angular.module('falstaf',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
    otherwise('/search').
    when('/search', {
      templateUrl: 'templates/search.html'
    }).
//    when('/search', {
//      template: '<checkout></checkout>'
//    }).
    when('/result', {
      templateUrl: 'templates/result.html'
    });    
//    when('/result', {
//      template: '<product-details></product-details>'
//    });
});
