app.factory("tabletFactory", function ($http, $q) {

    var tabletJSON =
        function () {
            var defered = $q.defer();
            $http.get(url.tabletjson).then(pass, fail)

            function pass(data) {
                defered.resolve(data);
            }

            function fail(err) {
                defered.reject(err);
            }
            return defered.promise;
        }

    return {
        "tabletJSON": tabletJSON
    };
})
