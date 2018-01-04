'use strict';
import _ from 'lodash/core';
import moment from 'moment';

export default class NetworkConfigController {
    constructor() {
        'ngInject';
        
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}

NetworkConfigController.$inject = [];