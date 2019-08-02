
describe('deleteProduct', ()=>{

    beforeEach(module('deleteProduct'));

    describe('DeleteProductController', ()=>{
        let $httpBackend, ctrl;
        var theID=2;
        var theProduct= {ID:2, Name:"aliii", Detail:"eyyoooooo", NumberStock:4};
        var mockRouteParams={id:2};

        beforeEach(inject(
            ($componentController, _$httpBackend_)=>{
                $httpBackend=_$httpBackend_;
                ctrl=$componentController('deleteProduct', {$routeParams:mockRouteParams});

                $httpBackend.expectGET("http://localhost:63038/api/Deneme/"+theID).respond(theProduct);
                $httpBackend.flush();
            }
        ));

        it('should get correct product', ()=>{
            
            

            expect(ctrl.product).toEqual(theProduct);
        });

        it('should show success when delete is successful', ()=>{
            ctrl.delete();

            
            var responseGood=200;
            $httpBackend.expectDELETE("http://localhost:63038/api/Deneme/"+theID).respond(responseGood);
            $httpBackend.flush();

            expect(ctrl.response).toBe("Item deleted successfully!");
        });

        it('should show error when delete is unsuccessful', ()=>{
            ctrl.delete();

            var responseBad=404;
            
            $httpBackend.expectDELETE("http://localhost:63038/api/Deneme/"+theID).respond(responseBad);
            $httpBackend.flush();

            expect(ctrl.response).toBe("There has been an error deleting item. Error code: "+responseBad);
        });
    });
})