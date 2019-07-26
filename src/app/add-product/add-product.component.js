import tpl from "./add-product.template.html"


class AddProductController{
    
    constructor(RESTservice){
        this._rest=RESTservice;
        
    }

    add(){
        this._rest.addProduct({
            "id": 0, 
            "name": this.name, 
            "detail": this.detail
        });
    }
}

export default{
    template:tpl,
    controller: AddProductController
}

AddProductController.$inject=["RESTservice"];