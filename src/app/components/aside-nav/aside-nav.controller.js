'use strict';

export default class AsideNavController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onInit() {
        this.$log.log('Hello from the aside-nav component controller!');
    }
}