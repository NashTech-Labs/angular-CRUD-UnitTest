
(function () {
    "use strict";

    angular.module('rbApp').factory('editFactory', function($http, $q){
        return{
            editFactoryMethod : function(employee){

               return $http.post(config.serverUrl + config.update,{employee : employee},{
                    headers:{
                        'Content-Type' : 'application/json; charset=UTF-8'
                    }
                });
            },

            getById: function(arr, id) {
                for (var d = 0, len = arr.length; d < len; d += 1) {
                    if (arr[d]._id === id) {
                        return arr[d];
                    }
                }
            }
        };
    });
}());