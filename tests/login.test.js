import { expect } from 'chai';
import DATOS from '../data/loginData';
import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';

describe('MyStore', () => {
    it('Debería realizar login', async () => {

        await homePage.open('/');
        await homePage.goToSignIn;
        await loginPage.loginForm(DATOS.email,DATOS.password);
        await loginPage.goToHomePage;
        expect(await homePage.getTextAssertMainPage()).to.be.equal('Subsidiary of seleniumframework.com');
        
    });
});