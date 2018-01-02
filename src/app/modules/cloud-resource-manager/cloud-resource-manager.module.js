'use strict';

import './cloud-resource-manager.scss';
import subModuleRoutes from './cloud-resource-manager.routes';
import cloudResourceManagerController from './cloud-resource-manager.controller.js';

import cloudResourceOverviewModule from './cloud-resource-overview/cloud-resource-overview.module';


const cloudResourceManagerModule = angular.module('cloud-resource-manager-module', [
    // 模块级路由
    subModuleRoutes.name,
    cloudResourceOverviewModule.name
]);
cloudResourceManagerModule
    .controller('cloudResourceManagerController', cloudResourceManagerController);

export default cloudResourceManagerModule;