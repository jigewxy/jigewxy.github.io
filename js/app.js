var app = angular.module('myApp',["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/resume", {
      templateUrl: "resume.html",
      controller: "resumeCtrl"
    })
    .when("/webdev",{
       templateUrl:"webdev.html",
       controller: "webDevCtrl"
    })
    .when("/embed", {
        templateUrl:"embed.html",
        controller: "embedCtrl"
    })
    .when("/misc",{
        templateUrl:"misc.html",
        controller:"miscCtrl"})
    .otherwise({redirectTo: "/webdev"})
 });



 app.controller("resumeCtrl", function($scope){
  
    console.log("resumeCtrl");

 });

 app.controller("webDevCtrl", function($scope){

    console.log("webdevCtrl");

 });

app.controller("embedCtrl", function($scope){

    console.log("embedCtrl");

});

app.controller("misc", function($scope){

  console.log("miscCtrl");
});
