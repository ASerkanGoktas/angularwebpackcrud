import tpl from './delete-product.template.html';

class DeleteProductController{
    constructor(ProductService){
        
        this.product;
        this.ps=ProductService;

        
    }

    $onInit(){
        this.ps.getProduct(this.id).then((response)=>{
            this.product=response.data;
        })
    }

    delete(){
        // will be implemented

        const self=this;
        this.ps.deleteProduct(this.id).then(
            (response)=>{
                //Success

                self.response="Item deleted successfully!";
            },
            (response)=>{
                self.response="There has been an error deleting item. Error code: "+response.status;
            }
        )
    }
}

export default{
    template: tpl,
    controller: DeleteProductController,
    bindings:{id:"<"}
}

DeleteProductController.$inject=["ProductService"];