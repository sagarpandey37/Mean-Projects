const app = angular.module("mapModule", []);

var mapview;

app.directive("mapcss", function () {
    return {
        template: '<style type="text/css"> .mapclass { height: 650px; width: 100% } </style>',
        restrict: "E"
    }

});
app.directive("maphead", function () {
    return {
        template: '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlJLzC7owStCtQ2v9d8lgn-OtHuohXpBo"> </script>',
        restrict: "E"
    }

});


function sagarMap() {
    var latlong = {
        lat: 28.701172,
        lng: 77.430393
    };
    var map = new google.maps.Map(mapview, {
        zoom: 19,
        center: latlong
    });
    var marker = new google.maps.Marker({
        position: latlong,
        map: map
    });
}

app.directive("spmaps", function () {
    return {
        link: function (scope, Element, attrs) {
            mapview = Element[0];
            sagarMap();
            Element[0].setAttribute("class", "mapclass");
        },
        restrict: "A"
    }




});
