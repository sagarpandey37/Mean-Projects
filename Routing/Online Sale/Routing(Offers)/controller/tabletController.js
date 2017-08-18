app.controller("tabletController", function ($scope, tabletFactory) {

    var promise = tabletFactory.tabletJSON();
    promise.then(pass, fail);

    function pass(data) {
        console.log(data);
        $scope.taboffer = data;
    }

    function fail(er) {
        $scope.error = er;
    }
})
