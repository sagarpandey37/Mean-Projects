app.factory("clothesFactory", function ($http, $q) {

    var clothesJSON =
        function () {
            var defered = $q.defer();
            $http.get(url.clothesjson).then(pass, fail)

            function pass(data) {
                defered.resolve(data);
            }

            function fail(err) {
                defered.reject(err);
            }
            return defered.promise;
        }

    return {
        "clothesJSON": clothesJSON
    };
})
