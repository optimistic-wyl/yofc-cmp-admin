'use strict';

import NetworkController from './network.controller';
import networkTpl from './network.html';
import './network.scss';

export default class NetworkComponent {
    constructor() {
        this.controller = NetworkController;
        this.templateUrl = networkTpl;
    }
}