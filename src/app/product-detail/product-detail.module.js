import angular from 'angular';
import ProductDetailComponent from './product-detail.component';

let module=angular.module('productDetail', []).component("productDetail", ProductDetailComponent);

export default module.name;