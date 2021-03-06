'use strict';
import _ from 'lodash/core';
import moment from 'moment';

export default class SecurityController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}