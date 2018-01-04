'use strict';

import asideNavTpl from './aside-nav.html';
import asideNavController from './aside-nav.controller';
import './aside-nav.scss';

export default class Component {
    constructor() {
        this.templateUrl = asideNavTpl;
        this.controller = asideNavController;
    }
}