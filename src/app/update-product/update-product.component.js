import tpl from "./update-product.template.html";

class UpdateProductController{

    constructor(ProductService)
    {
        
        this.product={};
        this.regex="\\d+";
        this.ps=ProductService;

    }

    $onInit(){
        
        const self=this;
        this.ps.getProduct(this.id).then((response)=>{
            //Success
            self.product=response.data;
            self.name=self.product.Name;
            self.detail=self.product.Detail;
            self.number=self.product.NumberStock;
        });
    }

    submit_update(form){
        if(form.$valid){

            const self=this;

            const data={
                ID:this.id,
                Name: this.name,
                Detail: this.detail,
                NumberStock: this.number
            }
            this.ps.updateProduct(data).then((response)=>{
                //Success
                self.response="Success updating product!";
            },
            
            (response)=>{
                //Failure
                self.response="Error updating product! Error code: "+response.status;
            });

        }else{
            return "There is an error about inputs";
        }
    }

}

UpdateProductController.$inject=["ProductService"];

export default{
    controller: UpdateProductController,
    template: tpl,
    bindings: {id:"<"}
}