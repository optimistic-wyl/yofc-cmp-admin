'use strict';


// import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./modules/async-page-example/async.html';
// import asyncTemplate from './modules/async-page-example/async.html';
import cloudResourceManagerTpl from './modules/cloud-resource-manager/cloud-resource-manager.html';

function routeConfig($urlRouterProvider, $stateProvider) {
    'ngInject';


    $stateProvider
        .state('yofc-cmp', {
            abstruct: true
        })
        // .state('async', {
        //     url: '/async',
        //     templateUrl: asyncTemplate,
        //     controller: 'asyncController',
        //     resolve: {
        //         asyncPreloading: resolverProvider.asyncPagePrealoading
        //     }
        // })
        .state('yofc-cmp.cloud-resource-mgr', {
            url: '/cloud-resource-mgr',
            templateUrl: cloudResourceManagerTpl,
            controller: 'cloudResourceManagerController'
        })


    $urlRouterProvider.otherwise('/cloud-resource-mgr/overview');

}

export default angular
    .module('index.routes', [])
    .config(routeConfig);