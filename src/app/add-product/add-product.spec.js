
describe('addProduct', ()=>{

    beforeEach(module('addProduct'));

    describe('AddProductController', ()=>{
        let $httpBackend, ctrl;

        beforeEach(inject(
            ($componentController, _$httpBackend_)=>{
                $httpBackend=_$httpBackend_;
                ctrl=$componentController('addProduct');


                

                ctrl.ID=0;
                ctrl.name="laptop";
                ctrl.detail="Great laptop woohoo";
                ctrl.number=3;

                var mockform={
                    $valid:true
                };
    
                ctrl.submit_add(mockform);
                
            }
        ));

        it('should get an OK response from server', ()=>{
            
            var data={
                ID:0,
                Name:"laptop",
                Detail:"Great laptop woohoo",
                NumberStock:3
            };
            $httpBackend.expectPOST('http://localhost:63038/api/Deneme', data).respond(201, '');
            
            $httpBackend.flush();
            expect(ctrl.response).toBe("Success!");
        });

        it('should show error when there is error about server', ()=>{

            var response=404;
            var data={
                ID:0,
                Name:"laptop",
                Detail:"Great laptop woohoo",
                NumberStock:3
            };
            $httpBackend.expectPOST('http://localhost:63038/api/Deneme', data).respond(response, '');
            
            $httpBackend.flush();
            expect(ctrl.response).toBe("Error adding product! Error code: "+response);
        });

    });



    describe('There will be a form and the button is disabled until correct input is given and there will be error messages', ()=>{

        var scope;
        var compile
        var compiled;
        var element;
        var ms_name, ms_detail, ms_number;
        var formObj;

        beforeEach(inject(
            
            ($compile, $rootScope)=>{
                scope= $rootScope.$new();
                element= angular.element('<add-product></add-product>');
                element= $compile(element)(scope);
                ctrl=element.controller('addProduct');
                scope.$apply();
                
        }));



        it('should show correct errors when there are certain faulty inputs and button must be disabled', ()=>{

            const empty=`ng-invalid-required`;
            const short=`ng-invalid-minlength`;
            const justint=`ng-invalid-pattern`;
            const long=`ng-invalid-maxlength`;
            
            var messages=element.find('input');   

            
            var input_name= $(messages[0]);
            var input_detail= $(messages[1]);
            var input_number= $(messages[2]);

            
            ctrl.name="";
            ctrl.detail="";
            ctrl.number="";
           
            scope.$digest();
            

            expect(input_name.hasClass(empty)).toBe(true);
            expect(input_detail.hasClass(empty)).toBe(true);
            expect(input_number.hasClass(empty)).toBe(true);

            ctrl.name="ad"; //less than 3
            ctrl.detail="lasdfssf"; //less than 10
            
            scope.$digest();

            
            expect(input_name.hasClass(short)).toBe(true);
            expect(input_detail.hasClass(short)).toBe(true);

            ctrl.name="asdfasfasfdasasdfasf"; //more than 12
            ctrl.detail="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"; //more than 40
            ctrl.number="saljfd"; //Not number;

            scope.$digest();
            expect(input_name.hasClass(long)).toBe(true);
            expect(input_detail.hasClass(long)).toBe(true);
            expect(input_number.hasClass(justint)).toBe(true);
            
        });
    });
});