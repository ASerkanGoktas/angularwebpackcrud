import tpl from "./product-detail.template.html";

class ProductDetailController{
    
    constructor($http, $routeParams){
        this.detail="";

        const root="http://localhost:63038/api/Deneme/"
        const self=this;
        $http.get(root+$routeParams.id).then(
            (response)=>{
                self.detail=response.data.Detail;
            }, (response)=>{
                self.detail="Could not fetch detail. Error Code: "+response.status;
            }

        )
    }
}

ProductDetailController.inject=['$http', '$routeParams'];

export default{
    controller: ProductDetailController,
    template: tpl
}

