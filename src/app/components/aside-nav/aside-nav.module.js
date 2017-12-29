'use strict';

import AsideNavComponent from './aside-nav.component';
import './aside-nav.scss';

const asideNavModule = angular.module('aside-nav-module', []);

asideNavModule
    .component('yofcCmpAsideNav', new AsideNavComponent());

export default asideNavModule;