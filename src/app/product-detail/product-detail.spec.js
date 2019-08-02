
describe('productDetail', ()=>{

    beforeEach(module('productDetail'));

    describe('ProductDetailController', ()=>{

        let $httpBackend, ctrl;
        let theID=2;
        let mockRouteParams={
            id:theID
        };

        beforeEach(inject(
            ($componentController, _$httpBackend_)=>{
                $httpBackend=_$httpBackend_;
                ctrl=$componentController('productDetail', {$routeParams:mockRouteParams});
            }
        ));

        it('should show the detail of product', ()=>{
           
            expect(ctrl.detail).toBe("");

            let data={
                ID:2,
                Name:"voy",
                Detail:"alivelizirdeli",
                NumberStock:5
            };

            $httpBackend.expectGET("http://localhost:63038/api/Deneme/"+theID).respond(data);
            $httpBackend.flush();

            expect(ctrl.detail).toBe(data.Detail);
        });
    });
})