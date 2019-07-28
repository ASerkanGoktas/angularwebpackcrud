import tpl from './product-list.template.html';

class ProductListContoller{
    constructor(RESTservice)
    {

        this._rest=RESTservice;

        this.products = [
            {
                ID:12,
                name:"kitap",
                detail:"güzel",
                number_in_stock:4

            },
            {
                ID:21,
                name:"kitap",
                detail:"kötü",
                number_in_stock:2

            },
            {
                ID:12,
                name:"eyy",
                detail:"yoo",
                number_in_stock:5

            }]
    }

    saveData(product){
        this._rest.setData(product);
    }
}

    export default {
    template: tpl,
    controller: ProductListContoller
}


