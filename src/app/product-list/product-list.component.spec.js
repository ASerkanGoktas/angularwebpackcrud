
describe('productList', function() {

    beforeEach(module('productList'));

    beforeEach(inject(
        ($templateCache)=>{
          //Boilerplate of template   
          $templateCache.put('product-list.template.html');

}));

    describe('ProductListController', ()=>{
        var $httpBackend, ctrl;

        beforeEach(inject(
            ($componentController, _$httpBackend_)=>{
                $httpBackend=_$httpBackend_;
                $httpBackend.when('GET', 'http://localhost:63038/api/Deneme').respond([{ID:2, Name:"hey", Detail:"asfasfasf", NumberStock:1}]);

                ctrl= $componentController('productList');
            })
            );


        it("should create a 'products' property with 1 element fetched with $http", ()=>{
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.products).toEqual([]);

            $httpBackend.expectGET('http://localhost:63038/api/Deneme');
            $httpBackend.flush();
            expect(ctrl.products).toEqual([{ID:2, Name:"hey", Detail:"asfasfasf", NumberStock:1}]);
        });

    });

    describe('testing the templates of components. There will be an error raised if a faulty html is produced.', ()=>{
    

        describe('template: product-list. There will be a table which has rows of products', ()=>{
            var $compile;
            var scope;
            var $httpBackend;
            var element;
            var compiled;
            var ctrl;
            
            // Angular strips the underscores when injecting
            beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
                $compile = _$compile_;
                scope = _$rootScope_.$new();
                $httpBackend=_$httpBackend_;

    
                $httpBackend.when('GET', 'http://localhost:63038/api/Deneme').respond([{ID:2, Name:"hey", Detail:"asfasfasf", NumberStock:1},{ID:2, Name:"hey", Detail:"asfasfasf", NumberStock:1},{ID:2, Name:"hey", Detail:"asfasfasf", NumberStock:1}]);
                
                element= angular.element('<product-list></product-list>');
                element=$compile(element)(scope);
                ctrl=element.controller('productList');
                
                $httpBackend.flush();
                scope.$digest();
    
                
               
                
            }));
    
            it('should contain 3 rows since there are 3 products', ()=>{
    
                var elm_row= element.find('tbody').find('tr');
        
                
                expect(elm_row.length).toBe(3);
    
    
            });
    
            
    
    
        });
    });

});

