'use strict';

import asideNavTpl from './aside-nav.html';
import asideNavController from './aside-nav.controller';

export default class Component {
    constructor() {
        this.templateUrl = asideNavTpl;
        this.controller = asideNavController;
    }
}