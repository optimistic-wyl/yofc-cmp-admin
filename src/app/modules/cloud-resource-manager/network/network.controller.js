'use strict';
import _ from 'lodash/core';
import moment from 'moment';

import routeMgrTpl from './route-mgr.html';


export default class NetworkController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.routeMgrTpl = routeMgrTpl;
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}