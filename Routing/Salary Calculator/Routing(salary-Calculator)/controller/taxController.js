app.controller("taxController", function ($scope, $routeParams) {
    $scope.GrossSalary = $routeParams.gs;
    $scope.applyTax = function () {
        var grosssalary = $scope.GrossSalary;
        var tax = grosssalary * 0.10;
        var ns = grosssalary - tax;
        $scope.salaryAfterTax = ns;
        $scope.GrossSalary = "";

    }

})
