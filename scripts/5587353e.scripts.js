"use strict";angular.module("demoApp",["angular-momentum-scroll"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("demoApp").controller("MainCtrl",["$scope","$log","$timeout",function(e,a,o){e.awesomeThings=["scroll me down","HTML5 Boilerplate","AngularJS","Karma","iScroll","momentum","Demo","Github","HTML5","Javascript","-- and again --","HTML5 Boilerplate","AngularJS","Karma","iScroll","momentum","Demo","Github","HTML5","Javascript","-- and again --","HTML5 Boilerplate","AngularJS","Karma","iScroll","momentum","Demo","Github","HTML5","Javascript","-- and again --","HTML5 Boilerplate","AngularJS","Karma","iScroll","momentum","Demo","Github","HTML5","Javascript"],e.logger=[],e.log=function(a,o){e.logger.push("From callback: pageX "+a+" pageY "+o)},e.$watch("currPageY",function(){e.logger.push("From scope: pageX "+e.currPageX+" pageY "+e.currPageY)}),o(function(){e.currPageY=5},1e3),o(function(){e.currPageY=10},2e3),o(function(){e.awesomeThings.splice(0,0,"foo"),e.awesomeThings.push("bar")},3e3)}]);