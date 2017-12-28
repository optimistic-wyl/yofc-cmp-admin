'use strict';

import headerTpl from './header.html';
import headerController from './header.controller';

export default class FooterComponent {
    constructor() {
        this.templateUrl = headerTpl;
        this.controller = headerController;
    }
}