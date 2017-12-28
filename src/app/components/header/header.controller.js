'use strict';

export default class headerController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onInit() {
        this.$log.log('Hello from the header component controller!');
    }
}