'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
// 云资源管理模块
import cloudResourceManagerModule from './modules/cloud-resource-manager/cloud-resource-manager.module';


const App = angular.module(
    "yofc-cmp-admin", [
        // plugins
        uiRouter,
        "ngAnimate",
        "ngCookies",
        "ngTouch",
        "ngSanitize",
        "ngMessages",
        "ngAria",
        "ngTable",
        "restangular",
        "oc.lazyLoad",
        "ui.bootstrap",
        // core
        coreModule.name,

        // components
        indexComponents.name,

        // routes
        indexRoutes.name,

        // modules
        cloudResourceManagerModule.name

    ]
);

App
    .config(config)
    .run(run);



export default App;