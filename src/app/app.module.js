import angular from 'angular';
import ngRoute from 'angular-route';
import productListModule from './product-list/product-list.module';
import addProductModule from './add-product/add-product.module';

angular.module('productApp', [
    productListModule,
    addProductModule,
    ngRoute,
    
    
]).config(['$routeProvider',
function config($routeProvider){
    $routeProvider.when('/', {
        template: '<product-list></product-list>'
    }).when('/add', {
        template: '<add-product></add-product>'
    }).otherwise({
        redirectTo: "/"
    });


}

]).factory("RESTservice", ['$http',($http)=>{
    const root= "http://localhost:63038/api/Deneme";
    return {

        
        getAll: ()=>{
            $http.get(root).then((response)=>{return response});
        },
        addProduct: (data)=>{
            $http.post(root, data).then((response)=>{return response});
        },
        updateProduct:(data, id)=>{
            $http.put(root+"/"+id, data).then((response)=>{return response});
        },
        deleteProduct:(id)=>{
            $http.delete(root+"/"+id).then((response)=>{return response});
        }
    }
    
    
    
}]);

