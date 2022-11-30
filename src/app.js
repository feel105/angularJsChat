var app = angular.module("myApp", [
  "ngRoute",
  "myApp.page1",
  "myApp.page2",
  "ngWebsocket",
]);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    redirectTo: "/page1",
  });
  //$locationProvider.html5Mode(true);
});

app.factory("websocket", function ($websocket) {
  var ws = {};
  var socket = {};
  socket.createConnection = function () {
    console.log("calledn");
    ws = $websocket.$new("ws://localhost:3000/");
    ws.$on("$open", function () {
      console.log("Oh my gosh, websocket is really open! Fukken awesome!");
    });
  };
  return socket;
});

app.factory("Socket", [
  "$http",
  "$q",
  function ($http, $q) {
    var ws = {};
    var socket = {
      url: "ws://localhost:3000/",
    };
    socket.createConnection = function () {
      ws = new WebSocket(socket.url);
      ws.onopen = function (event) {
        console.log("Established");
      };
    };
    return socket;
  },
]);

app.service("myService", function () {
  return "is my service";
});

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

// app.config(["$routeProvider"], function ($routeProvider) {
//   $routeProvider.otherwise({
//     redirectTo: "/page1",
//   });
// });
