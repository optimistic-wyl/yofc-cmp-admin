'use strict';
import LoginComponent from './components/login/login.component';


export default angular.module('login.components', [])
    .component('yofcLogin', new LoginComponent());