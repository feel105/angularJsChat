// angular
//   .module("myApp.page2", ["ngRoute"])
//   .config(["$routeProvider"], function ($routeProvider, $locationProvider) {
//     $locationProvider.hashValue("!");
//     $routeProvider.when("/page2", {
//       templateUrl: "page2/page2.html",
//       controller: "page2Ctrl",
//     });
//   })
//   .controller("page2Ctrl", function () {
//     console.log("page2Ctrl");
//   });

var app = angular.module("myApp.page2", ["ngRoute"]);

app
  .config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/page2", {
      templateUrl: "page2/page2.html",
      controller: "page2Ctrl",
    });
  })
  .controller("page2Ctrl", function () {
    console.log("page2Ctrl");
  });
