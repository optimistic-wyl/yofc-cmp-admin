'use strict';

import OverviewController from './overview.controller';
import overviewTpl from './overview.html';
import './overview.scss';

export default class CloudResourceOverviewComponent {
    constructor() {
        this.controller = OverviewController;
        this.templateUrl = overviewTpl;
    }
}