
(function () {
    "use strict";

    angular.module('rbApp').factory('listFactory', function($http){
        return{
            listFactoryMethod : function(){
                return $http.get(config.serverUrl + config.read);
            }
        };
    });
}());