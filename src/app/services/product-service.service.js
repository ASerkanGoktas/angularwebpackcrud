
class ProductService{

    constructor($http){
        this.$http=$http;
        this.root="http://localhost:63038/api/Deneme";
    }

    getAll(){
        return this.$http.get(this.root); 
    }

    addProduct(data){
        return this.$http.post(this.root, data);
    }

    updateProduct(data){
        return this.$http.put(this.root + "/" + data.ID, data);
    }

    deleteProduct(id){
        return this.$http.delete(this.root + "/" + id);
    }

    getProduct(id){
        return this.$http.get(this.root + "/" + id);
    }
}

ProductService.$inject=["$http"];

export default ProductService;