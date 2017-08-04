app.controller("clothesController", function ($scope, clothesFactory) {

    var promise = clothesFactory.clothesJSON();
    promise.then(pass, fail);

    function pass(data) {
        console.log(data);
        $scope.clothesoffer = data;
    }

    function fail(er) {
        $scope.error = er;
    }
})
