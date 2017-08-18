const app = angular.module("videoModule", []);

app.directive("spvideo", function () {
    return {

        template: ` <center>   <video width="1280"  height="540" controls="controls">
            <source src="http://127.0.0.1:57276/sample video.mp4" type="video/mp4">
           </video></center>`,
        restrict: "E"
    }

});
