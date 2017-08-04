app.config(function ($routeProvider, $locationProvider, MOBILE, TABLET, CLOTHES, SHOES) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        template: "<h1>Welcome</h1>",
    }).when(MOBILE, {
        templateUrl: "mobile.html",
        controller: "mobileController"
    }).when(TABLET, {
        templateUrl: "tablet.html",
        controller: "tabletController"
    }).when(CLOTHES, {
        templateUrl: "clothes.html",
        controller: "clothesController"
    }).when(SHOES, {
        templateUrl: "shoes.html",
        controller: "shoesController"
    }).otherwise({
        template: "Error Page , No Match Found",
        redirectTo: "/"
    });
});
