'use strict';
import _ from 'lodash/core';
import moment from 'moment';

export default class NetworkConfigController {
    constructor($scope, $element, NgTableParams) {
        'ngInject';

        const self = this;

        const data = [
            { id: 1, name: "Moroni", age: 50, test: 0 },
            { id: 2, name: "Moroni", age: 50, test: 0 },
            { id: 3, name: "Moroni", age: 50, test: 0 },
            { id: 4, name: "Moroni", age: 50, test: 0 },
            { id: 5, name: "Moroni", age: 50, test: 0 },
            { id: 6, name: "Moroni", age: 50, test: 0 }
        ];

        const params = this.createUsingFullOptions(data);
        self.tableParams = new NgTableParams(params.initialParams, params.initialSettings);
        self.childtableParams = new NgTableParams(params.initialParams, params.initialSettings);
    }


    createUsingFullOptions(data) {
        const initialParams = {
            count: 5 // initial page size
        };
        const initialSettings = {
            // page size buttons (right set of buttons in demo)
            counts: [],
            // determines the pager buttons (left set of buttons in demo)
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
            dataset: data
        };

        return {
            initialParams: initialParams,
            initialSettings: initialSettings
        }
        // return new NgTableParams(initialParams, initialSettings);
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}

NetworkConfigController.$inject = ['$scope', '$element', 'NgTableParams'];