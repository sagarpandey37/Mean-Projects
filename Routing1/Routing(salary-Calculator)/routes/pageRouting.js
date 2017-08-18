app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/taxCompute/:gs", {
        templateUrl: "taxCompute.html",
        controller: "taxController"
    }).otherwise({
        template: "",
        redirectTo: "/"
    });
});
