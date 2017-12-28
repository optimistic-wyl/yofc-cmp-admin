'use strict';

import FooterComponent from './footer.component';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule
    .component('yofcCmpFooter', new FooterComponent());

export default footerModule;