'use strict';

import StoreController from './store.controller';
import storeTpl from './store.html';
import './store.scss';

export default class StoreComponent {
    constructor() {
        this.controller = StoreController;
        this.templateUrl = storeTpl;
    }
}