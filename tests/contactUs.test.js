import { expect } from 'chai';
import contactUs from '../pages/contact.us';
import homePage from '../pages/home.page';

describe('MyStore', () => {
    it('Debería llenar formulario de Contact Us', async () => {
        await homePage.open('/');
        await homePage.goToContactUs;
        expect(await contactUs.getTextAssert()).to.be.equal('Contact');
        await contactUs.fillInForm;
        await homePage.goToHomePage;
        expect(await homePage.getTextAssertMainPage()).to.be.equal('Subsidiary of seleniumframework.com');
    });
});