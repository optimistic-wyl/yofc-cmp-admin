'use strict';
import _ from 'lodash/core';
import moment from 'moment';

export default class ObjectMgrController {
    constructor($scope, $element, NgTableParams) {
        'ngInject';
        const self = this;        
        
        const data = [
            {id: 1, name: "Moroni", age: 50, test: 0},
            {id: 2, name: "Moroni", age: 50, test: 0},
            {id: 3, name: "Moroni", age: 50, test: 0},
            {id: 4, name: "Moroni", age: 50, test: 0},
            {id: 5, name: "Moroni", age: 50, test: 0},
            {id: 6, name: "Moroni", age: 50, test: 0}
        ];

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
                dataset: data
            };
            return new NgTableParams(initialParams, initialSettings);
        }

        $scope.checkboxes = {
            checked: false,
            items: {}
        };
      
        // watch for check all checkbox
        $scope.$watch('checkboxes.checked', function(value) {
            angular.forEach(data, function(item) {
                $scope.checkboxes.items[item.id] = value;
            });
        });
          
        // watch for data checkboxes
        $scope.$watch('checkboxes.items', function() {
            let checked = 0, unchecked = 0,
                total = data.length;
            angular.forEach(data, function(item) {
              checked   +=  ($scope.checkboxes.items[item.id]) || 0;
              unchecked += (!$scope.checkboxes.items[item.id]) || 0;
            });
            if ((unchecked === 0) || (checked === 0)) {
                $scope.checkboxes.checked = (checked === total);
            }
            // grayed checkbox
            angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked !== 0 && unchecked !== 0));
        }, true);
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}

ObjectMgrController.$inject = ['$scope', '$element', 'NgTableParams'];