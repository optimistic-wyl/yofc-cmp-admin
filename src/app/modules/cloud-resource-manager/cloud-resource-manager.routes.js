'use strict';
// 云资源概况模板
import overviewTpl from './overview/overview.html';

// 云计算资源模板
import calcTpl from './calc/calc.html';

// 云存储资源模板
import storeTpl from './store/store.html';

// 云网络资源模板
import networkTpl from './network/network.html';

// 云安全资源模板
import securityTpl from './security/security.html';


function routeConfig($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider
        .state('yofc-cmp.cloud-resource-mgr.overview', {
            url: '/overview',
            templateUrl: overviewTpl
        })
        .state('yofc-cmp.cloud-resource-mgr.calc', {
            url: '/calc',
            templateUrl: calcTpl
        })

    .state('yofc-cmp.cloud-resource-mgr.store', {
        url: '/store',
        templateUrl: storeTpl
    })

    .state('yofc-cmp.cloud-resource-mgr.network', {
            url: '/network',
            templateUrl: networkTpl
        })
        .state('yofc-cmp.cloud-resource-mgr.security', {
            url: '/security',
            templateUrl: securityTpl
        })
}

export default angular
    .module('cloud-resource-manager.routes', [])
    .config(routeConfig);