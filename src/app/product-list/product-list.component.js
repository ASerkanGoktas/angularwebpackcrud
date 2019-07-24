import angular from 'angular';

angular.module('productList').component(
    'productList', {

        template: require('C:/Users/ahmet.goktas/Desktop/productApp/src/app/product-list/product-list.template.html'),
        controller: function ProductListContoller(){
            this.products = [
                {
                    ID:12,
                    name:"kitap",
                    detail:"güzel"

                },
                {
                    ID:21,
                    name:"kitap",
                    detail:"kötü"

                },
                {
                    ID:12,
                    name:"eyy",
                    detail:"yoo"

                }]

        }


    });