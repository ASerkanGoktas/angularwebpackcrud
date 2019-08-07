describe('UpdateProduct page consist of a list containing properties of the product with given ID and a form to update the product', function () {
    var ProductService;
    var element;
    var theProduct = { ID: 2, Name: "toto", Detail: "He blesses rains down in Africe", NumberStock: 5 };
    var comp = '<update-product id="' + theProduct.ID + '"></update-product>';
    var scope, compile;
    var $q;
    var input_name, input_detail, input_number;
    var ctrl;

    const SELECTOR_MESSAGE_NAME= "div[ng-messages='$ctrl.updateProductForm.Name.$error']";
    const SELECTOR_MESSAGE_DETAIL= "div[ng-messages='$ctrl.updateProductForm.Detail.$error']";
    const SELECTOR_MESSAGE_NUMBER= "div[ng-messages='$ctrl.updateProductForm.Number.$error']";

    const SPAN_EMPTY='<span ng-message="required" class="ng-scope">';
    const SPAN_SHORT='<span ng-message="minlength" class="ng-scope">';
    const SPAN_LONG='<span ng-message="maxlength" class="ng-scope">';
    const SPAN_PATTERN='<span ng-message="pattern" class="ng-scope">';

    var finder= (selector, html) =>{
        return angular.element(html.find(selector));
    };

    beforeEach(module('productApp'));

    beforeEach(inject((_ProductService_, _$compile_, _$rootScope_, _$q_) => {
        jasmine.addCustomEqualityTester(angular.equals);

        ProductService = _ProductService_;
        scope = _$rootScope_.$new();
        compile = _$compile_;
        $q = _$q_;
    }));

    beforeEach(done => {
        spyOn(ProductService, 'getProduct').and.callFake(() => {
            done();
            return $q.when({ "data": theProduct });
        });
        
        

        

        element = compile(comp)(scope);
        scope.$apply();

        ctrl=element.controller('updateProduct');

        var inputs= element.find('input');
        input_name = angular.element(inputs[0]);
        input_detail = angular.element(inputs[1]);
        input_number = angular.element(inputs[2]);

    });


    it(' `getProduct` should be called when the controller is initialized', () => {
        expect(ProductService.getProduct).toHaveBeenCalled();
    });

    it('the form inputs should have the value of corresponding values of `theProduct`', ()=>{
        expect(input_name.val()).toEqual(theProduct.Name);
        expect(input_detail.val()).toEqual(theProduct.Detail);
        expect(input_number.val()).toEqual(""+theProduct.NumberStock);
    });

    it('the form should show `required` errors when there is no input and the button should be disabled', ()=>{
        ctrl.name="";
        ctrl.detail="";
        ctrl.number="";
        scope.$digest();
        
        expect(finder(SELECTOR_MESSAGE_NAME, element).html()).toContain(SPAN_EMPTY);
        expect(finder(SELECTOR_MESSAGE_DETAIL, element).html()).toContain(SPAN_EMPTY);
        expect(finder(SELECTOR_MESSAGE_NUMBER, element).html()).toContain(SPAN_EMPTY);

        expect(finder("button", element).prop('disabled')).toBe(true);
    });

    it('the form should show minlength errors and require error for `Number in stock` and the button should be disabled', ()=>{
        ctrl.name="ab" //shorter than 3
        ctrl.detail="lasjss" //shorter than 10
        ctrl.number="";
        scope.$digest();

        expect(finder(SELECTOR_MESSAGE_NAME, element).html()).toContain(SPAN_SHORT);
        expect(finder(SELECTOR_MESSAGE_DETAIL, element).html()).toContain(SPAN_SHORT);
        expect(finder(SELECTOR_MESSAGE_NUMBER, element).html()).toContain(SPAN_EMPTY);

        expect(finder("button", element).prop('disabled')).toBe(true);
    });

    it('the form should show maxlength errors and pattern error for `Number in stock` and the button should be disabled', ()=>{
        ctrl.name="alsdflsajfljsfasldfj" //longer than 12
        ctrl.detail="lasdjflasjfjasldfjşasdfaskfşasjdfşlaskdfşlasjdflasjdfşajsdşf" //longer than 40
        ctrl.number="lasjf";
        scope.$digest();

        expect(finder(SELECTOR_MESSAGE_NAME, element).html()).toContain(SPAN_LONG);
        expect(finder(SELECTOR_MESSAGE_DETAIL, element).html()).toContain(SPAN_LONG);
        expect(finder(SELECTOR_MESSAGE_NUMBER, element).html()).toContain(SPAN_PATTERN);

        expect(finder("button", element).prop('disabled')).toBe(true);
    });

    it('the form should show no errors and the button should be enabled', ()=>{

        //Proper values
        ctrl.name="ahmet";
        ctrl.detail="he is very clever and hardworking";
        ctrl.number="12";

        var check="ng-inactive";
        expect(finder(SELECTOR_MESSAGE_NAME, element).hasClass(check)).toBe(true);
        expect(finder(SELECTOR_MESSAGE_DETAIL, element).hasClass(check)).toBe(true);
        expect(finder(SELECTOR_MESSAGE_NUMBER, element).hasClass(check)).toBe(true);

        expect(finder("button", element).prop('disabled')).toBe(false);
    });

    it('the `updateProduct` method of `ProductService` should be triggered when form is submitted', done =>{

        spyOn(ProductService, 'updateProduct').and.callFake(()=>{
            done();
            return $q.when(201, '');
        });

        //Proper values
        ctrl.name="ahmet";
        ctrl.detail="he is very clever and hardworking";
        ctrl.number="12";
        
        scope.$digest();
        var form=angular.element(element.find('form'));
        form.submit();
        
        

        expect(ProductService.updateProduct).toHaveBeenCalled();
    });



});