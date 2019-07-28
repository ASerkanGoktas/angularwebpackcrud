import tpl from "./update-product.template.html";

class UpdateProductController{

    constructor(RESTservice)
    {
        this._rest=RESTservice;
        this.product= this._rest.getData();
        this.name=this.product.name;
        this.detail=this.product.detail;
        this.number_in_stock=this.product.number_in_stock;
        

    }

    submit_update(form){
        
    }

    validateForm(form){
        if(form.$valid){
            return "enabled";
        }else{
            return "disabled";
        }
    }
}

UpdateProductController.$inject=["RESTservice"];

export default{
    controller: UpdateProductController,
    template: tpl
}