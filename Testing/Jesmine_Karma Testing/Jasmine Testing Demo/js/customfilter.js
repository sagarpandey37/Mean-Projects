app.filter("initialCap", function () {
    return function (str) {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
})
