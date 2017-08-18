app.controller("onlineRegController", function ($scope, onlineregFactory) {
    var promise = onlineregFactory.countryJSON();
    promise.then(pass, fail);

    function pass(data) {
        console.log(data);
        $scope.countryObject = data;
    }

    function fail(data) {
        $scope.errorObj = data;
    }
    var promise = onlineregFactory.hobbiesJSON();
    promise.then(success, err);

    function success(data) {
        console.log(data);
        $scope.hobbieObject = data;
    }

    function err(data) {
        $scope.errorObj = data;
    }

    $scope.world = function () {
        if ($scope.countrySelect == "India") {
            var promise1 = onlineregFactory.IndiaJSON();
            promise1.then(success, err);

            function success(data) {
                console.log(data);
                $scope.cityObject = data;
            }

            function err(data) {
                $scope.errorObj = data;
            }
        } else if ($scope.countrySelect == "United States") {
            var promise1 = onlineregFactory.AmericaJSON();
            promise1.then(success, err);

            function success(data) {
                console.log(data);
                $scope.cityObject = data;
            }

            function err(data) {
                $scope.errorObj = data;
            }
        }

    }
    $scope.onlineSubmit = function () {
        if ($scope.onlineform.$valid) {
            alert("your form ia submit Congrats....");
        } else {
            alert("your form is not submit Please check all the Fields......");
        }
    }

})
