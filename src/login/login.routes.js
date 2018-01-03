'use strict';

function routeConfig($urlRouterProvider, $stateProvider) {
    'ngInject';


    $stateProvider
        .state('yofc-login', {
            abstruct: true
        })

    $urlRouterProvider.otherwise('/');

}

export default angular
    .module('login.routes', [])
    .config(routeConfig);