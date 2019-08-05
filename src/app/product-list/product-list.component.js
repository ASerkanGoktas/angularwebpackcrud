import tpl from './product-list.template.html';

class ProductListContoller{
   
   
    constructor(ProductService)
    {

        this.products=[];
        this.isLoaded=true;

        const self=this;
        ProductService.getAll().then((response)=>{

            //Success
            self.isLoaded=false;
            self.products=response.data;
        },

        (error)=>{
            self.isLoaded=false;
        }
        
        );
        

    }

}

    export default {
    template: tpl,
    controller: ProductListContoller
}

ProductListContoller.$inject=["ProductService"];
