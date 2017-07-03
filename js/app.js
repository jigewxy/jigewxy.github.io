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
    .when("/webdev",{
       templateUrl:"pages/webdev.html",
       //controller: "webDevCtrl"
    })
    .when("/embed", {
        templateUrl:"pages/embed.html",
       // controller: "embedCtrl"
    })
    .when("/misc",{
        templateUrl:"pages/misc.html",
        //controller:"miscCtrl"});
 });
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
