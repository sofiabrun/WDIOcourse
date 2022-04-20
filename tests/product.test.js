import { expect } from 'chai';
import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingCart from '../pages/shopping.cart';

describe('MyStore', () => {
    it('Debería seleccionar un producto de varias categorías y agregarlos al carrito', async () => {

        await homePage.open('/');
        await homePage.clickCategory;
        await categoryPage.clickSubcategory;
        await categoryPage.clickProduct;
        await productPage.addToCartProduct;
        await productPage.goToAccount;
        await shoppingCart.deleteProductFromCart;
        await shoppingCart.goToHomePage;
        expect(await homePage.getTextAssertMainPage()).to.be.equal('Subsidiary of seleniumframework.com');
        

    });
    


});