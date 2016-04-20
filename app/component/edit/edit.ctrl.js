
(function () {
    "use strict";

    angular.module('rbApp').controller('EditCtrl', EditCtrl);
    EditCtrl.$inject = ['$scope', '$state', 'editFactory', '$log', '$rootScope', '$stateParams'];
    function EditCtrl($scope, $state, editFactory, $log, $rootScope,$stateParams) {

        $scope.employee = $stateParams.editEmployee;
        console.log($stateParams.editEmployee);

        $scope.editMode=true;

        $scope.updateEmployee = function(employee) {


            editFactory.editFactoryMethod($scope.employee)
                .success(function(resultData){
                $state.go('home');
            }).error(function(error){
                alert("there is an error");
                $state.go('home');
            })



        }

    }
}());







