'use strict';

import loginTpl from './login.html';
import loginController from './login.controller';
import './login.scss';

export default class HeaderComponent {
    constructor() {
        this.templateUrl = loginTpl;
        this.controller = loginController;
    }
}