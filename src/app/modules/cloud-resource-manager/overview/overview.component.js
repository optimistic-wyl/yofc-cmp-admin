'use strict';

import CloudResourceOverviewController from './overview.controller';
import cloudResourceOverviewTpl from './overview.html';
import './overview.scss';

export default class CloudResourceOverviewComponent {
    constructor() {
        this.controller = CloudResourceOverviewController;
        this.templateUrl = cloudResourceOverviewTpl;
    }
}