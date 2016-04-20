
(function () {
    "use strict";

    angular.module('rbApp').factory('addFactory', function($http){
        return{
            addFactoryMethod : function(employee){
               return $http.post(config.serverUrl+config.create,{'employee':employee});
            }
        };
    });
}());