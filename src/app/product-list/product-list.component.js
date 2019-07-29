import tpl from './product-list.template.html';

class ProductListContoller{
   
   
    constructor($http)
    {

        
        this.products=[];
        const root= "http://localhost:63038/api/Deneme";

        const self=this;
        $http.get(root).then((response)=>{

            //Success
            self.products=response.data;
        },

        (error)=>{

        }
        
        );
        

    }

    onSuccess(){

    }
}

    export default {
    template: tpl,
    controller: ProductListContoller
}

ProductListContoller.$inject=["$http"];
