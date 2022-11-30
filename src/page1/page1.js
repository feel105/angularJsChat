// angular
//   .module("myApp.page1", ["ngRoute"])
//   .config(
//     ["$routeProvider", "$locationProvider"],
//     function ($routeProvider, $locationProvider) {
//       $locationProvider.hashValue("!");
//       $routeProvider.when("/page1", {
//         templateUrl: "page1/page1.html",
//         controller: "page1Ctrl",
//       });
//     }
//   )
//   .controller("page1Ctrl", function () {
//     console.log("page1Ctrl");
//   });

var app = angular.module("myApp.page1", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  console.log($locationProvider, " lication ");

  //$locationProvider.html5Mode(true);
  $routeProvider.when("/page1", {
    templateUrl: "page1/page1.html",
    controller: "page1Ctrl",
  });
});
//   .controller("page1Ctrl", function (random) {
//     console.log(random.generate(), " random.generate()");
//     console.log("page1Ctrl");
//   });
app.controller("page1Ctrl", [
  "$scope",
  "$window",
  "Socket",
  "$rootScope",
  "websocket",
  "$websocket",
  function ($scope, $window, socket, $rootScope, websocket, $websocket) {
    console.log("websocket", websocket);
    var ws = $websocket.$new("ws://localhost:3000/");
    ws.$on("$open", function () {
      console.log("Ohi listening websocket server");
      ws.$emit("ping", "hi listening websocket server");
      ws.$emit("pong", "data");
    });
    ws.$on("pong", function (data) {
      console.log("pong", data);
    });
  },
]);
// app.run(function ($websocket) {
//   var ws = $websocket.$new("ws://localhost:3000/"); // instance of ngWebsocket, handled by $websocket service

//   ws.$on("$open", function () {
//     console.log("Oh my gosh, websocket is really open! Fukken awesome!");

//     ws.$emit("ping", "hi listening websocket server"); // send a message to the websocket server

//     var data = {
//       level: 1,
//       text: "ngWebsocket rocks!",
//       array: ["one", "two", "three"],
//       nested: {
//         level: 2,
//         deeper: [
//           {
//             hell: "yeah",
//           },
//           {
//             so: "good",
//           },
//         ],
//       },
//     };

//     ws.$emit("pong", data);
//   });

//   ws.$on("pong", function (data) {
//     console.log("The websocket server has sent the following data:");
//     console.log(data);

//     ws.$close();
//   });

//   ws.$on("$close", function () {
//     console.log(
//       "Noooooooooou, I want to have more fun with ngWebsocket, damn it!"
//     );
//   });
// });
