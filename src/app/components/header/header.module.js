'use strict';

import HeaderComponent from './header.component';
import './header.scss';

const headerModule = angular.module('header-module', []);

headerModule
    .component('yofcCmpHeader', new HeaderComponent());

export default headerModule;