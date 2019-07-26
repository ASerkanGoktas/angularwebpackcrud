import tpl from './product-list.template.html';

class ProductListContoller{
    constructor()
    {
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
}

    export default {
    template: tpl,
    controller: ProductListContoller
}


