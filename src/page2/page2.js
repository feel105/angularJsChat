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
app.config(function ($routeProvider, $locationProvider) {
  console.log($locationProvider, " page2locationProvider ");
  //$locationProvider.html5Mode(true);
  $routeProvider.when("/page2", {
    templateUrl: "page2/page2.html",
    controller: "page2Ctrl",
  });
});

app.controller("page2Ctrl", [
  "$scope",
  "$window",
  "socketio",
  "$rootScope",
  function ($scope, $window, socketio, $rootScope) {
    $scope.customStyle = {};
    socketio.on("init", function (data) {
      $scope.status = data.status;
      //$scope.customStyle.lightClass = `light-` + $scope.status;
    });

    socketio.on("allNews", function (data) {
      console.log(data, " allNews ");
      $scope.status = data.status;
      //$scope.customStyle.lightClass = `light-` + $scope.status;
    });

    socketio.on("changeStatus", function (data) {
      console.log(data, " changeStatus ");
      $scope.status = data.status;
      //$scope.customStyle.lightClass = `light-` + $scope.status;
    });

    socketio.on("allMessage", function (data) {
      console.log(data, " allMessage ");
      $scope.allMessages = data;
    });

    $scope.myFunc = function (value) {
      let updateStatus = $scope.status === "off" ? "on" : "off";
      console.log(updateStatus, "updateStatus ");
      socketio.emit("changeStatus", updateStatus);
    };
    console.log("page2Ctrl");
  },
]);
