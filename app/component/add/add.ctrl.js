
(function () {
    "use strict";

    angular.module('rbApp').controller('AddCtrl', AddCtrl);

    AddCtrl.$inject = ['$scope', '$state', 'addFactory', '$log'];

    function AddCtrl($scope, $state, addFactory, $log) {

    $scope.employee = {};
    $scope.editMode=false;
    $scope.addEmployee = function() {
       // console.log(JSON.stringify(emoloyee));
        addFactory.addFactoryMethod($scope.employee).success(function(resultData, status, config, statusText){
            $state.go('home');
        }).error(function(error){

            $state.go('home');

        })
    };
    }
}());


