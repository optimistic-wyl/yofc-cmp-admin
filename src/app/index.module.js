'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './modules/main/main.module';


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
        "restangular",
        "oc.lazyLoad",

        // core
        coreModule.name,

        // components
        indexComponents.name,

        // routes
        indexRoutes.name,

        // modules
        mainModule.name

    ]
);

App
    .config(config)
    .run(run);



export default App;