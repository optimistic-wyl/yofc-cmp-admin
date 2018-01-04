'use strict';
import _ from 'lodash/core';
import moment from 'moment';

export default class NetworkController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}

NetworkController.$inject = [];