app.controller("mobileController", function ($scope, phoneFactory) {

    var promise = phoneFactory.phoneJSON();
    promise.then(pass, fail);

    function pass(data) {
        console.log(data);
        $scope.moboffer = data;
    }

    function fail(er) {
        $scope.error = er;
    }
})
