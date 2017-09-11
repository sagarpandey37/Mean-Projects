app.controller("calcController", function ($scope, calcFactory) {
    $scope.classColor = "white";
    $scope.doOperation = function (operator) {
        if (operator == '+') {
            $scope.result = calcFactory.addition(10, 50);
            $scope.classColor = "red";
        } else
        if (operator == '-') {
            $scope.result = calcFactory.subtraction(60, 20);
            $scope.classColor = "green";
        }
        if (operator == '*') {
            $scope.result = calcFactory.multiplication(50, 50);
            $scope.classColor = "blue";
        }
        if (operator == '/') {
            $scope.result = calcFactory.Division(20, 2);
            $scope.classColor = "yellow";
        }
    }
});
