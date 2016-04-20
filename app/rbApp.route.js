/***
 @Inside the config function we define our routes which are being used in our application.
 @Each state represents a functionality and work like a very small application.
 ****/


(function () {
    "use strict";

    angular.module('rbApp').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/component/home/home.html',
                controller: 'homeCtrl',
                resolve : {
                    list: function(listFactory){
                        return listFactory.listFactoryMethod();
                    }
                }
            })
            .state('add', {
                url: '/add',
                templateUrl: '/app/component/add/add.html',
                controller: 'AddCtrl'
            })
            .state('edit', {
                url: '/edit',
                params:{editEmployee:''},
                templateUrl: '/app/component/edit/edit.html',
                controller:'EditCtrl'
            })
            .state('delete', {
                url: '/delete',
                params:{deleteEmployee:''},
                templateUrl: '/app/component/delete/delete.html',
                controller: 'DeleteCtrl'
            });

    });
}());