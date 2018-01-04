'use strict';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import AsideNavComponent from './components/aside-nav/aside-nav.component';

export default angular.module('index.components', [])
    // 组装页面工作
    .component('yofcCmpHeader', new HeaderComponent())
    .component('yofcCmpFooter', new FooterComponent())
    .component('yofcCmpAsideNav', new AsideNavComponent());