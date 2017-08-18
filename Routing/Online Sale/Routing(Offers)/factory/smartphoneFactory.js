app.factory("phoneFactory", function ($http, $q) {

    var phoneJSON =
        function () {
            var defered = $q.defer();
            $http.get(url.phonejson).then(pass, fail)

            function pass(data) {
                console.log(data);
                defered.resolve(data);
            }

            function fail(err) {
                console.log(err);
                defered.reject(err);
            }
            return defered.promise;
        }

    return {
        "phoneJSON": phoneJSON
    };
})
