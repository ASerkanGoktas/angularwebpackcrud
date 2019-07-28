import angular from 'angular';
import ngRoute from 'angular-route';
import productListModule from './product-list/product-list.module';
import addProductModule from './add-product/add-product.module';
import updateProductModule from './update-product/update-product.module';
import deleteProductModule from './delete-product/delete-product.module';
import 'bootstrap/dist/css/bootstrap.min.css';


angular.module('productApp', [
    productListModule,
    addProductModule,
    updateProductModule,
    deleteProductModule,
    ngRoute
    
    
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
    })
    .otherwise({
        redirectTo: "/"
    });


}

]).factory("RESTservice", ['$http',($http)=>{
    const root= "http://localhost:63038/api/Deneme";
    let savedData={};
    return {

        getAll: ()=>{
            $http.get(root).then((response)=>{return response});
        },
        addProduct: (data)=>{
            $http.post(root, data).then((response)=>{return response});
        },
        updateProduct:(data)=>{
            $http.put(root+"/"+data.id, data).then((response)=>{return response});
        },
        deleteProduct:(id)=>{
            $http.delete(root+"/"+id).then((response)=>{return response});
        },
        setData:(data)=>{savedData=data},
        getData:()=>{return savedData}
    }
    
    
    
}]);

