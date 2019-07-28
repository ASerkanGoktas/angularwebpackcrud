import angular from 'angular';
import updateProductComponent from './update-product.component';

let module=angular.module("updateProduct", []).component("updateProduct", updateProductComponent);

export default module.name;