import tpl from './delete-product.template.html';

class DeleteProductController{
    constructor(RESTservice){
        this._rest=RESTservice;
        this.product=this._rest.getData();
    }

    delete(){
        // will be implemented
    }
}

export default{
    template: tpl,
    controller: DeleteProductController
}

DeleteProductController.$inject=["RESTservice"];