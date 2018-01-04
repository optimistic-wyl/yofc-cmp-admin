'use strict';
// 云资源概况模板
import overviewTpl from './overview/overview.html';

// 云存储资源模板
import storeTpl from './store/store.html';

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
            component: 'calc'
        })

    .state('yofc-cmp.cloud-resource-mgr.store', {
        url: '/store',
        templateUrl: storeTpl
    })
    .state('yofc-cmp.cloud-resource-mgr.store.san-mgr', {
        url: '/san-mgr',
        component: 'sanMgr'
    })
    .state('yofc-cmp.cloud-resource-mgr.store.object-mgr', {
        url: '/object-mgr',
        component: 'objectMgr'
    })

    .state('yofc-cmp.cloud-resource-mgr.network', {
            url: '/network',
            component: 'network'
        })
        .state('yofc-cmp.cloud-resource-mgr.network.route-mgr', {
            url: '/route-mgr',
            component: 'routeMgr'
        })
        .state('yofc-cmp.cloud-resource-mgr.network.float-ip', {
            url: '/float-ip',
            component: 'floatIp'
        })
        .state('yofc-cmp.cloud-resource-mgr.network.network-config', {
            url: '/network-config',
            component: 'networkConfig'
        })
        .state('yofc-cmp.cloud-resource-mgr.security', {
            url: '/security',
            templateUrl: securityTpl
        })

    $urlRouterProvider.otherwise('/');
}

export default angular
    .module('cloud-resource-manager.routes', [])
    .config(routeConfig);