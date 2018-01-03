'use strict';

import CalcController from './calc.controller';
import calcTpl from './calc.html';
import './calc.scss';

export default class CalcComponent {
    constructor() {
        this.controller = CalcController;
        this.templateUrl = calcTpl;
    }
}