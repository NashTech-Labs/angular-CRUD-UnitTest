(function () {
    "use strict";

    angular.module('rbApp').controller('DeleteCtrl', DeleteCtrl);
    DeleteCtrl.$inject = ['$scope', '$state', 'deleteFactory', '$log', '$rootScope', '$stateParams'];
    function DeleteCtrl($scope, $state, deleteFactory, $log, $rootScope,$stateParams) {

        $scope.employee = $stateParams.deleteEmployee;
        $scope.editMode=false;

        $scope.deleteEmployee = function(employee) {
            deleteFactory.deleteFactoryMethod(employee).success(function(resultData){

                $state.go('home');
            }).error(function(error){
                swal({   title: "Error!",   text: "something went Wrong",   type: "error",   confirmButtonText: "Cool" });
            });
        }
    }
}());







