import tpl from "./product-detail.template.html";

class ProductDetailController{
    
    constructor(ProductService){
        this.detail="";
        this.ps=ProductService;
    }

    $onInit() {
        
        this.ps.getProduct(this.id).then(
            response => {
                this.detail=response.data.Detail;
            }, response =>{
                this.detail = "Could not fetch detail. Error Code: " + response.status;
            });
    }
}

ProductDetailController.inject = ["ProductService"];

export default{
    controller: ProductDetailController,
    template: tpl,
    bindings:{id:"<"}
}

