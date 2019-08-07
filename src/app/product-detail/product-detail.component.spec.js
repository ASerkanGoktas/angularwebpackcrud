
describe('the detail of the product should be shown', () => {

    var $scope, $compile, $q, ProductService;
    var element;
    var theProduct = { ID: 2, Name: "toto", Detail: "He blesses rains down in Africe", NumberStock: 5 };
    var comp='<product-detail id="'+ theProduct.ID+'"></product-detail>';
    
    beforeEach(module('productApp'));


    beforeEach(inject((_ProductService_, _$compile_, _$rootScope_, _$q_) => {
        jasmine.addCustomEqualityTester(angular.equals);

        ProductService = _ProductService_;
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        $q = _$q_;
    }));

    beforeEach(done => {
        spyOn(ProductService, "getProduct").and.callFake(() => {
            done();
            return $q.when({"data": theProduct});
        });

        $scope.$digest();

        element=$compile(comp)($scope);
    });

    it('should trigger `getProduct` of `ProductService`', () => {
        expect(ProductService.getProduct).toHaveBeenCalled();
    });

    it('should show the correct detail', () => {
        
        $scope.$digest();
        
        var p=angular.element(element.find('p'));
        expect(p.html()).toContain(theProduct.Detail);
    });
});