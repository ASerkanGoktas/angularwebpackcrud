import angular from 'angular';
import ngRoute from 'angular-route';
import productListModule from './product-list/product-list.module';
import addProductModule from './add-product/add-product.module';
import updateProductModule from './update-product/update-product.module';
import deleteProductModule from './delete-product/delete-product.module';
import productDetailModule from './product-detail/product-detail.module';
import ngMessages from 'angular-messages';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/popper.js/dist/popper.min.js'
import 'webpack-icons-installer/bootstrap';  //load only bootstrap glyphicons


angular.module('productApp', [
    productListModule,
    addProductModule,
    updateProductModule,
    deleteProductModule,
    productDetailModule,
    ngRoute,
    ngMessages,

    
    
]).config(['$routeProvider',
function config($routeProvider){
    $routeProvider.when('/', {
        template: '<product-list></product-list>'
    }).when('/add', {
        template: '<add-product></add-product>'
    }).when('/edit/:id', {
        template: '<update-product></update-product>'
    }).when('/delete/:id', {
        template: "<delete-product></delete-product>"
    }).when('/detail/:id', {
        template: "<product-detail></product-detail>"
    }).otherwise({
        redirectTo: "/"
    });


}

])/*.factory("Productservice", ['$http',($http)=>{
    const root= "http://localhost:63038/api/Deneme";
    
    return {

        getAll: (onSuccess)=>{
            $http.get(root).then(onSuccess)
        },
        addProduct: (data)=>{
            $http.post(root, data).then();
        },
        updateProduct:(data)=>{
            $http.put(root+"/"+data.id, data);
        },
        deleteProduct:(id)=>{
            $http.delete(root+"/"+id);
        },
        setData:(data)=>{savedData=data},
        getData:()=>{return savedData}
    }
    
    
    
}]);*/

