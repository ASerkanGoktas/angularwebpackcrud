describe('There is a list showing the properties of the product and a button to delete it', () => {

    var ProductService;
    var element;
    var theProduct = { ID: 2, Name: "toto", Detail: "He blesses rains down in Africe", NumberStock: 5 };
    var comp = '<delete-product id="' + theProduct.ID + '"></delete-product>';
    var $scope, $compile;
    var $q;
    var ctrl;


    beforeEach(module('productApp'));

    beforeEach(inject((_ProductService_, _$compile_, _$rootScope_, _$q_) => {
        jasmine.addCustomEqualityTester(angular.equals);

        ProductService = _ProductService_;
        $scope = _$rootScope_.$new();
        $compile = _$compile_;
        $q = _$q_;
    }));

    beforeEach(done => {
        spyOn(ProductService, 'getProduct').and.callFake(() => {
            done();
            return $q.when({ "data": theProduct });

        });

        element = $compile(comp)($scope);
        $scope.$apply();

        ctrl = element.controller('deleteProduct');


    });

    it(' `getProduct` should be called when the controller is initialized', () => {
        expect(ProductService.getProduct).toHaveBeenCalled();
    });

    it('the item listed should be correct', () => {
        var listofprop = element.find('li');
        

        var i=0;

        Object.keys(theProduct).forEach( key => {
            expect(angular.element(listofprop[i++]).html()).toContain(theProduct[key]);
        });

        expect(i).toBe(listofprop.length); //The number of properties of the product should equal to # of list items
    });

    it('show success message when deletion is successfull', (done) => {
        
        spyOn(ProductService, 'deleteProduct').and.callFake(() => {
            
            done();
            return $q.when(201);
        });

        var button=angular.element(element.find('button'));
        button.click();
        $scope.$digest();

        
        expect(angular.element(element.find("#response")).html()).toBe(ctrl.successMessage);
    });

    it('show error message when deletion is not successfull', (done) => {
        
        var errorCode=404;
        spyOn(ProductService, 'deleteProduct').and.callFake(() => {
            done();
            return $q.reject({"status":errorCode});
        });

        var button=angular.element(element.find('button'));
        button.click();
        $scope.$digest();

        
        expect(angular.element(element.find("#response")).html()).toBe(ctrl.errorMessage+errorCode);
    });

});









