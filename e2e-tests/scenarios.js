

describe('Product Application', ()=>{

    it('should redirect index.html/errorpath to index.html#!/', ()=>{
        browser.get('index.html');
        expect(browser.getCurrentUrl()).not.toContain('index.html#!/errorpath');
    });


    describe('View: Product list', ()=>{

        beforeEach(()=>{
            browser.get('index.html#!/');
        });

        it('should display all elements', ()=>{
            expect(element(by.binding("product.ID")).getText()).toBe("")
        });
    });

});