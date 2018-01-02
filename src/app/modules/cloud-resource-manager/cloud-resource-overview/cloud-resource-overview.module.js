'use strict';

import CloudResourceOverviewComponent from './cloud-resource-overview.component';
import './cloud-resource-overview.scss';

const CloudResourceOverviewModule = angular.module('cloud-resource-overview-module', [
        'ui.router'
    ])
    .component('cloudResourceOverview', new CloudResourceOverviewComponent());

export default CloudResourceOverviewModule;