  /// For Test the Factory//////////////

  describe("A suite for test Factories of Calculator", function () {
      beforeEach(module("calcApp"));

      var factory;

      beforeEach(inject(function (_calcFactory_) {
          factory = _calcFactory_;
          console.log(factory);

      }));
      it("Add factory", function () {
          var a = "100";
          var b = "200";
          var result = factory.addition(a, b);
          // var result = parseInt(a) + parseInt(b);
          expect(result).toBe(300);
      });
      it("sub factory", function () {
          var a = "30";
          var b = "20";
          var result = factory.subtraction(a, b);
          // var result = parseInt(a) - parseInt(b);
          expect(result).toBe(10);
      });
      it("mul factory", function () {
          var a = "100";
          var b = "200";
          var result = factory.multiplication(a, b);
          // var result = parseInt(a) * parseInt(b);
          expect(result).toBe(20000);
      });
      it("divide factory", function () {
          var a = "200";
          var b = "100";
          var result = factory.Division(a, b);
          //var result = parseInt(a) / parseInt(b);
          expect(result).toBe(2);
      });
  });

  ///For Test the Controller////////


  describe('A Suite for addition Controller', function () {
      beforeEach(module("calcApp"));
      var $controller;
      beforeEach(inject(function (_$controller_) {
          // The injector unwraps the underscores (_) from around the parameter names when matching
          $controller = _$controller_;
      }));

      it('Addition Of Controller', function () {
          var $scope = {};
          var controller = $controller("calcController", {
              $scope: $scope
          });
          $scope.doOperation('+');
          expect($scope.result).toEqual(60);
      });

      it('subtraction Of Controller', function () {
          var $scope = {};
          var controller = $controller("calcController", {
              $scope: $scope
          });
          $scope.doOperation('-');
          expect($scope.result).toEqual(40);
      });
      it('multiplication Of Controller', function () {
          var $scope = {};
          var controller = $controller("calcController", {
              $scope: $scope
          });
          $scope.doOperation('*');
          expect($scope.result).toEqual(2500);
      });
      it('Divide Of Controller', function () {
          var $scope = {};
          var controller = $controller("calcController", {
              $scope: $scope
          });
          $scope.doOperation('/');
          expect($scope.result).toEqual(10);
      });

  });

  /////// For Test the Directives /////////////

  describe('Unit testing oF MapCss Directive', function () {
      var $compile,
          $rootScope;

      // Load the myApp module, which contains the directive
      beforeEach(module('calcApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(inject(function (_$compile_, _$rootScope_) {
          // The injector unwraps the underscores (_) from around the parameter names when matching
          $compile = _$compile_;
          $rootScope = _$rootScope_;
      }));

      it('Replaces the element with the appropriate content', function () {
          // Compile a piece of HTML containing the directive
          var element = $compile("<css></css>")($rootScope);
          // fire all the watches
          $rootScope.$digest();
          // Check that the compiled element contains the templated content
          expect(element.html()).toContain(".mapclass { height: 650px; width: 100% }");
      });
  });


  ///////// For Test the Filters   ///////////////////


  describe('filter for First Capital letter of Words', function () {

      var $filter;

      beforeEach(module('calcApp'));

      beforeEach(inject(function (_$filter_) {
          $filter = _$filter_;
      }));


      it('returns First letter capital and rest is small ', function () {
          var letter = $filter("initialCap");
          expect(letter('saGAr')).toEqual('Sagar');
      });

  });
