'use strict';

import CloudResourceOverviewController from './cloud-resource-overview.controller';
import cloudResourceOverviewTpl from './cloud-resource-overview.html';

export default class CloudResourceOverviewComponent {
    constructor() {
        this.controller = CloudResourceOverviewController;
        this.templateUrl = cloudResourceOverviewTpl;
    }
}