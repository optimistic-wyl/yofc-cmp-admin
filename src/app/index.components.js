'use strict';
import headerModule from './components/header/header.module';
import footerModule from './components/footer/footer.module';

export default angular.module('index.components', [
    headerModule.name,
    footerModule.name
]);