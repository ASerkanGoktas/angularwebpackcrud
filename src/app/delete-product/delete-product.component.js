import tpl from './delete-product.template.html';

class DeleteProductController{
    constructor($http, $routeParams){
        this.product;
        this.http=$http;
        this.routeParams=$routeParams;
        this.id=this.routeParams.id;

        const root="http://localhost:63038/api/Deneme";
        this.http.get(root+"/"+this.id).then((response)=>{
            this.product=response.data;
        })
    }

    delete(){
        // will be implemented

        const root="http://localhost:63038/api/Deneme/"+this.id;
        this.http.delete(root);
    }
}

export default{
    template: tpl,
    controller: DeleteProductController
}

DeleteProductController.$inject=["$http", "$routeParams"];