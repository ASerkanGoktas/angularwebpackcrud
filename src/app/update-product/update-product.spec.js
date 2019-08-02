describe('updateProduct', function(){

    beforeEach(module('updateProduct'));

    describe('UpdateProductController', ()=>{
        let $httpBackend, ctrl;
        var theID=2;
        var theProduct= {ID:2, Name:"aliii", Detail:"eyyoooooo", NumberStock:4};
        var mockRouteParams={id:2};

        beforeEach(inject(
            ($componentController, _$httpBackend_)=>{
                $httpBackend=_$httpBackend_;
                
                $httpBackend.whenGET("http://localhost:63038/api/Deneme/"+theID).respond(theProduct);

                ctrl=$componentController("updateProduct", {$routeParams:mockRouteParams});
            }
        ));

        it('should get right products to update', ()=>{
            jasmine.addCustomEqualityTester(angular.equals);

            $httpBackend.expectGET('http://localhost:63038/api/Deneme/'+theID);
            $httpBackend.flush();

            expect(ctrl.product).toEqual(theProduct)
        });

        it("should show success if updated", ()=>{
            
            var mockform={
                $valid:true
            };
            
            ctrl.id=theProduct.ID;
            ctrl.name=theProduct.Name;
            ctrl.detail=theProduct.Detail;
            ctrl.number=theProduct.NumberStock;
            
            ctrl.submit_update(mockform);

            $httpBackend.expectPUT('http://localhost:63038/api/Deneme/'+theID, theProduct).respond(201, '');
            $httpBackend.flush();

            expect(ctrl.response).toEqual("Success updating product!");
        });

    });
});