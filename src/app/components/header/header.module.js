'use strict';

import headerComponent from './header.component';
import './header.scss';

const headerModule = angular.module('header-module', []);

headerModule
    .component('yofcCmpHeader', new headerComponent());

export default headerModule;