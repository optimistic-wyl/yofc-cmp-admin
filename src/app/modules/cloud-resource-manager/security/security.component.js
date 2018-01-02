'use strict';

import SecurityController from './security.controller';
import securityTpl from './security.html';
import './security.scss';

export default class SecurityComponent {
    constructor() {
        this.controller = SecurityController;
        this.templateUrl = securityTpl;
    }
}