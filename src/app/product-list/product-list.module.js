import angular from 'angular';
import productListComponent from './product-list.component';

let module = angular.module('productList', [])
.component('productList', productListComponent);

export default module.name;