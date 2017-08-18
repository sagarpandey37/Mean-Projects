app.factory("onlineregFactory", function ($http, $q, america, country, india, hobbie) {

    var object = {
        countryJSON: function () {
            var deferred = $q.defer();
            $http.get(country).then(pass, fail);

            function pass(data) {

                deferred.resolve(data);
            }

            function fail(data) {
                deferred.reject(data);
            }
            return deferred.promise;
        },
        AmericaJSON: function () {
            var deferred = $q.defer();
            $http.get(america).then(pass, fail);

            function pass(data) {

                deferred.resolve(data);
            }

            function fail(data) {
                deferred.reject(data);
            }
            return deferred.promise;

        },
        IndiaJSON: function () {
            var deferred = $q.defer();
            $http.get(india).then(pass, fail);

            function pass(data) {

                deferred.resolve(data);
            }

            function fail(data) {
                deferred.reject(data);
            }
            return deferred.promise;

        },
        hobbiesJSON: function () {
            var deferred = $q.defer();
            $http.get(hobbie).then(pass, fail);

            function pass(data) {

                deferred.resolve(data);
            }

            function fail(data) {
                deferred.reject(data);
            }
            return deferred.promise;

        }
    }
    return object;

})
