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
        self.tableParams = createUsingFullOptions();

        function createUsingFullOptions() {
            const initialParams = {
                count: 5 // initial page size
            };
            const initialSettings = {
                // page size buttons (right set of buttons in demo)
                counts: [],
                // determines the pager buttons (left set of buttons in demo)
                paginationMaxBlocks: 13,
                paginationMinBlocks: 2,
                dataset: [{
                    name: "Moroni", 
                    age: 50,
                    test: 0
                },{
                    name: "Moroni", 
                    age: 50,
                    test: 0
                },{
                    name: "Moroni", 
                    age: 50,
                    test: 0
                },{
                    name: "Moroni", 
                    age: 50,
                    test: 0
                },{
                    name: "Moroni", 
                    age: 50,
                    test: 0
                },{
                    name: "Moroni", 
                    age: 50,
                    test: 0
                }]
            };
            return new NgTableParams(initialParams, initialSettings);
        }
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}

NetworkController.$inject = ['$log', 'NgTableParams'];