

describe('Product Application', ()=>{

    it('should redirect index.html/errorpath to index.html#!/', ()=>{
        browser.get('index.html');
        expect(browser.getCurrentUrl()).not.toContain('index.html#!/errorpath');
    });


    describe('The opening page is the product-list page. This page consist of a table of products and buttons to make actions about them.', ()=>{

        beforeEach(()=>{
            browser.get('index.html#!/');
        });

        it('should display all elements', ()=>{
            expect(element(by.binding("product.ID")).getText()).toBe("13")
        });

        it('buttons should redirect to correct urls', () => {
            let row, add, edit, det, del;
            
            row=element.all(by.tagName('tbody')).then( row => {
                console.log(row[0].getText());
            });
            
        });
    });

});