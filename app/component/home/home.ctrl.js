(function () {
    "use strict";

    angular.module('rbApp').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope', '$state', 'listFactory', '$log','list'];
    function homeCtrl($scope, $state, listFactory, $log, list) {

        $scope.record=list.data.data;

        $scope.edit = function(currentEmployee){
            console.log(JSON.stringify(currentEmployee));
            $state.go('edit',{editEmployee:currentEmployee});
        }

        $scope.deleteEmployee = function(employeeID){
            console.log(JSON.stringify(employeeID));
            $state.go('delete',{deleteEmployee:employeeID});
        }



    }
}());