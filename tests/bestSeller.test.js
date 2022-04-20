import { expect } from 'chai';
import homePage from '../pages/home.page';
import shoppingCart from '../pages/shopping.cart';

describe('MyStore', () => {
    it('Debería seleccionar un producto de la categoría Best Seller', async () => {
        await homePage.open('/');
        (await homePage.blockBestSeller).click();
        await homePage.clickElement(await homePage.blockBestSeller);
        await homePage.clickProduct();
        browser.pause(5000);
        expect(await homePage.productName.getText()).to.be.equal('Printed Chiffon Dress');
        await homePage.closeProduct();
        await homePage.goToCheckOut();
        await shoppingCart.deleteProductFromCart();
        await shoppingCart.goToHomePage();
        expect(await homePage.textAssertMainPage.getText()).to.be.equal('Subsidiary of seleniumframework.com');
        
    });
    
});