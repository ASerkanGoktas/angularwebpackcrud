import angular from 'angular';
import ngRoute from 'angular-route';
import productListModule from './product-list/product-list.module';
import addProductModule from './add-product/add-product.module';
import updateProductModule from './update-product/update-product.module';
import deleteProductModule from './delete-product/delete-product.module';
import productDetailModule from './product-detail/product-detail.module';
import ProductService from './services/product-service.service';
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
    function config($routeProvider) {
        $routeProvider.when('/', {
            template: '<product-list></product-list>'
        }).when('/add', {
            template: '<add-product></add-product>'
        }).when('/edit/:id', {
            template: (params) => {
                return '<update-product id=' + params.id + '></update-product>'
            }
        }).when('/delete/:id', {
            template: (params) => {
                return '<delete-product id=' + params.id + '></delete-product>'
            }
        }).when('/detail/:id', {
            template: (params) => {
                return '<product-detail id=' + params.id + '></product-detail>'
            }
        }).otherwise({
            redirectTo: "/"
        });


    }

]).factory("ProductService", ['$http', $http => new ProductService($http)]);

