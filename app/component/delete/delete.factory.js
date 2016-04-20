//*all factories -> roobrickUiFactory *//
(function () {
"use strict";

angular.module('rbApp').factory('deleteFactory', function($http){
    return{
        deleteFactoryMethod : function(employee){

            return $http.delete(config.serverUrl + config.delete + '/' +employee );
        }
     };

});
}());