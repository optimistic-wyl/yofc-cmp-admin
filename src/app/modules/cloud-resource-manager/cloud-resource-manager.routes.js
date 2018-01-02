'use strict';
// 云资源概况模板
import cloudResourceOverviewTpl from './cloud-resource-overview/cloud-resource-overview.html';

function routeConfig($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider
        .state('yofc-cmp.cloud-resource-mgr.overview', {
            url: '/overview',
            templateUrl: cloudResourceOverviewTpl
        })
}

export default angular
    .module('cloud-resource-manager.routes', [])
    .config(routeConfig);