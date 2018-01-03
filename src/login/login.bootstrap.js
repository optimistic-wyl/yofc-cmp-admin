'use strict';

// login.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// vendor files
import "./login.vendor";

// login App module
import "./login.module";

import "../assets/styles/sass/login.scss";

angular.element(document).ready(() => {
    angular.bootstrap(document, ['yofc-login'], {
        strictDi: true
    });
});