import tpl from "./update-product.template.html";

class UpdateProductController{

    constructor(ProductService)
    {
        
        this.product={};
        this.regex="\\d+";
        this.ps=ProductService;

    }

    $onInit(){
        
        this.ps.getProduct(this.id).then(response => {
            //Success
            this.product=response.data;
            this.name=this.product.Name;
            this.detail=this.product.Detail;
            this.number=this.product.NumberStock;
        });
    }

    submit_update(form){
        if(form.$valid){

            
            console.log("hallo");
            const data={
                ID:this.id,
                Name: this.name,
                Detail: this.detail,
                NumberStock: this.number
            }
            this.ps.updateProduct(data).then((response)=>{
                //Success
                this.response="Success updating product!";
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