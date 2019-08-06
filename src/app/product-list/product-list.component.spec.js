describe('this will the page that all the products are displayed', () => {

    let ProductService;
    let ctrl, element;
    let $scope, $compile, $q;
    let products = [{ ID: 1, Name: "ali", Detail: "Keepin it real!", NumberStock: 3 },
    { ID: 2, Name: "veli", Detail: "Merhaba", NumberStock: 1 },
    { ID: 3, Name: "deli", Detail: "Nasılsınız!", NumberStock: 5 }];
    let component = '<product-list></product-list>';

    var finder= (selector, html) =>{
        return angular.element(html.find(selector));
    };

    beforeEach(module('productApp'));

    beforeEach(inject((_ProductService_, _$compile_, _$rootScope_, _$q_) => {

        ProductService = _ProductService_;
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        $q = _$q_;
    }));

    beforeEach( done => {
        spyOn(ProductService, "getAll").and.callFake(() => {
            done();
            return $q.when({ "data": products });
        });

        element = $compile(component)($scope);
        ctrl = element.controller('productList');

    });

    it('ProductService should fetch all of the products, therefore, when the productListController is being initialized, `getAll function should be called.`', () => {
        expect(ProductService.getAll).toHaveBeenCalled();
    });

    it('should list correct elements', () => {
        $scope.$digest();
        var rows=element.find('tr');

        let i=1;

        //Traversing rows and checking if there are correct products corresponding to the data fetched from server
        products.forEach( product => {
            expect(angular.element(rows[i]).html()).toContain(product.ID);
            expect(angular.element(rows[i]).html()).toContain(product.Name);
            expect(angular.element(rows[i++]).html()).toContain(product.NumberStock);
        });
        
    });

});
