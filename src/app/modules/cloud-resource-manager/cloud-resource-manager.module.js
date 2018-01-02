'use strict';

import './cloud-resource-manager.scss';
import subModuleRoutes from './cloud-resource-manager.routes';
import cloudResourceManagerController from './cloud-resource-manager.controller.js';

//云资源概览
import OverViewComponent from './overview/overview.component';

const cloudResourceManagerModule = angular.module('cloud-resource-manager-module', [
    // 模块级路由
    subModuleRoutes.name
]);
cloudResourceManagerModule
    .controller('cloudResourceManagerController', cloudResourceManagerController)
    // 云资源概览组件（页面组件，用于组织页面）
    .component('overview', new OverViewComponent());
export default cloudResourceManagerModule;