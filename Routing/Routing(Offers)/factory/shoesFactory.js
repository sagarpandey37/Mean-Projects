app.factory("shoesFactory", function ($http, $q) {

    var shoesJSON =
        function () {
            var defered = $q.defer();
            $http.get(url.shoesjson).then(pass, fail)

            function pass(data) {
                defered.resolve(data);
            }

            function fail(err) {
                defered.reject(err);
            }
            return defered.promise;
        }

    return {
        "shoesJSON": shoesJSON
    };
})
