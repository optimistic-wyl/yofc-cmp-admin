'use strict';

import './cloud-resource-manager.scss';
import subModuleRoutes from './cloud-resource-manager.routes';
import cloudResourceManagerController from './cloud-resource-manager.controller.js';

//云资源概览
import OverViewComponent from './overview/overview.component';
//云计算资源
import CalcComponent from './calc/calc.component';
//云网络资源
import NetworkComponent from './network/network.component';
import RouteMgrController from './network/route-mgr/route-mgr.controller';
import routeMgrTpl from './network/route-mgr/route-mgr.html'; 
import FloatIpController from './network/float-ip/float-ip.controller';
import floatIpTpl from './network/float-ip/float-ip.html';
import NetworkController from './network/network-config/network-config.controller';
import networkConfigTpl from './network/network-config/network-config.html'

const cloudResourceManagerModule = angular.module('cloud-resource-manager-module', [
    // 模块级路由
    subModuleRoutes.name
]);
cloudResourceManagerModule
    .controller('cloudResourceManagerController', cloudResourceManagerController)
    // 云资源概览组件（页面组件，用于组织页面）
    .component('overview', new OverViewComponent())
    .component('calc', new CalcComponent())
    .component('network', new NetworkComponent())
    .component('routeMgr', {
        controller: RouteMgrController,
        templateUrl: routeMgrTpl
    })
    .component('floatIp', {
        controller: FloatIpController,
        templateUrl: floatIpTpl
    })
    .component('networkConfig', {
        controller: NetworkController,
        templateUrl: networkConfigTpl
    });
export default cloudResourceManagerModule;