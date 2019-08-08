

describe('Product Application', () => {

    it('should redirect index.html/errorpath to index.html#!/', () => {
        browser.get('index.html');
        expect(browser.getCurrentUrl()).not.toContain('index.html#!/errorpath');
    });


    describe('The opening page is the product-list page. This page consist of a table of products and buttons to make actions about them.', () => {

        beforeEach(() => {
            browser.get('index.html#!/');
        });

        it('should display all elements', () => {
            expect(element(by.binding("product.ID")).getText()).toBe("13")
        });

        it('should add items when navigating to add-product page', async () => {
            const theProduct = { ID: 0, Name: "Veli", Detail: "Very good boy!", NumberStock: 4 };

            await browser.get('index.html#!/');

            element(by.css('.btn-primary')).click();

            await element(by.css('input[name="Name"]')).sendKeys(theProduct.Name);
            element(by.css('input[name="Detail"]')).sendKeys(theProduct.Detail);
            element(by.css('input[name="Number"]')).sendKeys(theProduct.NumberStock);

            element(by.css('button')).click();

            expect(await element(by.css('#response')).getText()).toBe("Success!");

            await browser.get('index.html#!/');

            expect(element.all(by.binding("product.Name")).last().getText()).toBe(theProduct.Name);
            expect(element.all(by.binding("product.NumberStock")).last().getText()).toBe(theProduct.NumberStock.toString());
        });

        xit('should delete items properly', async () => {
            let theProduct;

            await browser.get('index.html#!/');

            var row = element.all(by.repeater('product in $ctrl.products')).first();
            var cells = row.all(by.tagName('td'));

            var cellTexts = cells.map(function (elm) {
                return elm.getText();
            });

            console.log(cellTexts);
        });
    });

});