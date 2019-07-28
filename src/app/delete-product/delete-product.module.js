import angular from "angular";
import deleteProductComponent from './delete-product.component';

let module=angular.module('deleteProduct', []).component('deleteProduct', deleteProductComponent);

export default module.name;