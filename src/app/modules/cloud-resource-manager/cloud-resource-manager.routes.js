'use strict';
// 云资源概况模板
import cloudResourceOverviewTpl from './overview/overview.html';

function routeConfig($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider
        .state('yofc-cmp.cloud-resource-mgr.overview', {
            url: '/overview',
            templateUrl: cloudResourceOverviewTpl
        })
        .state('yofc-cmp.cloud-resource-mgr.network.route-mgr', {
            url: '/route-mgr',
            component: 'RouteMgrComponent'
        })        

    $urlRouterProvider.otherwise('/');
}

export default angular
    .module('cloud-resource-manager.routes', [])
    .config(routeConfig);