app.factory("calcFactory", function () {
    var object = {
        addition: function (a, b) {
            return parseInt(a) + parseInt(b);
        },
        subtraction: function (a, b) {
            return parseInt(a) - parseInt(b);
        },
        multiplication: function (a, b) {
            return parseInt(a) * parseInt(b);
        },
        Division: function (a, b) {
            return parseInt(a) / parseInt(b);
        }
    }

    return object;

})
