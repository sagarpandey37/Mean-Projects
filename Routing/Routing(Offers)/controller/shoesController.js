app.controller("shoesController", function ($scope, shoesFactory) {

    var promise = shoesFactory.shoesJSON();
    promise.then(pass, fail);

    function pass(data) {
        console.log(data);
        $scope.shoesoffer = data;
    }

    function fail(er) {
        $scope.error = er;
    }
})
