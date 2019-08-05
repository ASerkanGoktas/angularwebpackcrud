describe('updateProduct', function(){

    beforeEach(module('productApp'));

    describe('UpdateProductController', ()=>{
        let $httpBackend, ctrl;
        var theID=2;
        var theProduct= {ID:2, Name:"aliii", Detail:"eyyoooooo", NumberStock:4};
        var mockRouteParams={id:2};

        beforeEach(inject(
            ($componentController, _$httpBackend_, _ProductService_)=>{
                $httpBackend=_$httpBackend_;
                var ps=_ProductService_;
                
                
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

        describe("testing update-product template", ()=>{

            var ps;
            var element;
            var theProduct={ID:2, Name:"toto", Detail:"He blesses rains down in Africe", NumberStock:5};
            var comp='<update-product id="'+theProduct.ID+'"></update-product>';
            var scope, compile;
            var q;
            var ctrl;

            beforeEach(inject(
                (_ProductService_, _$compile_, _$rootScope_, _$q_)=>{
                    
                    ps=_ProductService_;
                    scope= _$rootScope_.$new();
                    compile=_$compile_;
                    q=_$q_;


                    spyOn(ps, 'getProduct').and.callFake(()=>{
                        return q.resolve(theProduct);
                     });

                    element=compile(comp)(scope);
                    scope.$digest();
                   
                    
                }
                
                
            ));

            it('should show errors when there are faulty inputs', ()=>{
                
                console.log(element);
                expect(ps.getProduct).toHaveBeenCalled();
            });
        });

    });
});