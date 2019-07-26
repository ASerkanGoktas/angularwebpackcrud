import angular from "angular";
import AddProductComponent from './add-product.component';

let module= angular.module("addProduct", []).component('addProduct', AddProductComponent);

export default module.name;