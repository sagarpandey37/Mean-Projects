app.controller("salarycontroller", function ($scope) {
    $scope.compute = function () {
        var salary = parseFloat($scope.salary);
        var HRA = salary * 0.30;
        var DA = salary * 0.20;
        var TA = salary * 0.10;
        var PF = (salary * 0.05) * 2;
        var GS = salary + HRA + DA + TA - PF;
        $scope.hra = HRA;
        $scope.da = DA;
        $scope.ta = TA;
        $scope.pf = PF;
        $scope.gs = GS;
    }
})
