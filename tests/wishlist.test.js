import { expect } from 'chai';
import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import productPage from '../pages/product.page';

describe('MyStore', () => {
    it('Debería seleccionar un producto y agregarlo a la WishList.', async () => {

        await homePage.open('/');
        await homePage.goToSignIn;
        await loginPage.loginForm;
        await loginPage.goToHomePage;
        expect(await homePage.getTextAssertMainPage()).to.be.equal('Subsidiary of seleniumframework.com');
        await homePage.clickCategory;
        await categoryPage.clickSubcategory;
        await categoryPage.clickProduct;
        await productPage.addProductToWishlist;
        await productPage.closeWishlist;
        await loginPage.goToHomePage;

        expect(await homePage.getTextAssertMainPage()).to.be.equal('Subsidiary of seleniumframework.com');
    });
});