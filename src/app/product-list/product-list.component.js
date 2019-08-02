import tpl from './product-list.template.html';

class ProductListContoller{
   
   
    constructor($http)
    {

        this.products=[];
        this.isLoaded=true;
        const root= "http://localhost:63038/api/Deneme";

        const self=this;
        $http.get(root).then((response)=>{

            //Success
            self.isLoaded=false;
            self.products=response.data;
        },

        (error)=>{
            self.isLoaded=false;
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
