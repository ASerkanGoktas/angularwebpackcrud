import tpl from "./add-product.template.html"


class AddProductController{
    
    constructor($http){
        this.http=$http;
        this.regex="\\d+";
        this.response="";
    }

    submit_add(form){
        
        if(form.$valid){
            let data={
                ID:0,
                Name:this.name,
                Detail:this.detail,
                NumberStock: this.number
            };
    
            const root="http://localhost:63038/api/Deneme";

            const self=this;
            this.http.post(root, data).then((response)=>{

                //Success
                self.response="Success!";
            },

            (response)=>{
                //Failure
                
                self.response="Error adding product! Error code: "+response.status;
            });
        }else{
            this.response="There is a problem about inputs";
        }

    }
}

export default{
    template:tpl,
    controller: AddProductController
}

AddProductController.$inject=["$http"];