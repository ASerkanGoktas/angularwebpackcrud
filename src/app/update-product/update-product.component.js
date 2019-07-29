import tpl from "./update-product.template.html";

class UpdateProductController{

    constructor($http, $routeParams)
    {
        this.root= "http://localhost:63038/api/Deneme";
        this.product;

        this.http=$http;
        this.routeParams=$routeParams;

        const self=this;
        this.http.get(this.root+"/"+$routeParams.id).then((response)=>{
            //Success
            self.product=response.data;
            self.name=self.product.Name;
            self.detail=self.product.Detail;
            self.number=self.product.NumberStock;
        })


    }

    submit_update(form){
        if(form.Name.$valid){

            const self=this;

            const data={
                ID:this.id,
                Name: this.name,
                Detail: this.detail,
                NumberStock: this.number
            }
            this.http.put(this.root+"/"+this.routeParams.id, data).then((response)=>{
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

UpdateProductController.$inject=["$http", "$routeParams"];

export default{
    controller: UpdateProductController,
    template: tpl
}