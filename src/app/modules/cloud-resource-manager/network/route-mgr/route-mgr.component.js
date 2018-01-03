'use strict';

import RouteMgrController from './route-mgr.controller.js';
import routeMgrTpl from './route-mgr.html';

export default class RouteMgrComponent {
    constructor() {
        this.controller = RouteMgrController;
        this.templateUrl = routeMgrTpl;
    }
}