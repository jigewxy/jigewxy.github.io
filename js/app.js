var app = angular.module('myApp',["ngRoute"]);

app.config(['$locationProvider', function($locationProvider){
  $locationProvider.hashPrefix('');    
}]); 

app.config(function($routeProvider){
    $routeProvider
    .when("/resume", {
      templateUrl: "pages/resume.html",
      //controller: "resumeCtrl"
    })
    .when("/daily",{
       templateUrl:"pages/day.html",
       //controller: "webDevCtrl"
    })
    .when("/weekly", {
        templateUrl:"pages/week.html",
       // controller: "embedCtrl"
    })
});


 /*app.controller("resumeCtrl", function($scope){
  
    console.log("resumeCtrl");

 });

 app.controller("webDevCtrl", function($scope){

    console.log("webdevCtrl");

 });

app.controller("embedCtrl", function($scope){

    console.log("embedCtrl");

});

app.controller("miscCtrl", function($scope){

  console.log("miscCtrl");
});*/
