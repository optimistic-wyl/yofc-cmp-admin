'use strict';
import _ from 'lodash/core';
import moment from 'moment';

import routeMgrTpl from './route-mgr.html';


export default class NetworkController {
    constructor($log, NgTableParams) {
        'ngInject';
        this.$log = $log;
        this.routeMgrTpl = routeMgrTpl;

        const self = this;
        const data = [{name: "Moroni", age: 50} /*,*/];
        self.tableParams = new NgTableParams({}, { dataset: data});
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}