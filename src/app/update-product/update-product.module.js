import angular from 'angular';
import ngMessages from 'angular-messages';
import updateProductComponent from './update-product.component';

let module=angular.module("updateProduct", [ngMessages]).component("updateProduct", updateProductComponent);

export default module.name;