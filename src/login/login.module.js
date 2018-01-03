'use strict';

import config from './login.config';
import run from './login.run';

import uiRouter from '@uirouter/angularjs';

// import coreModule from './core/core.module';
import loginComponents from './login.components';
import loginRoutes from './login.routes';

const App = angular.module(
    "yofc-login", [
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
        // coreModule.name,
        // components
        loginComponents.name,
        // routes
        loginRoutes.name,
        // modules
    ]
);

App
    .config(config)
    .run(run);



export default App;