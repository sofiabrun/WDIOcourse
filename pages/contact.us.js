import $ from 'webdriverio/build/commands/browser/$';
import BasePage from '../pages/base.page';

class ContactUs extends BasePage {

  //WebElements
  get subjectHeading(){ return $('#id_contact'); }
  get productName(){ return $('[alt = "Faded Short Sleeve T-shirts"]'); }
  get addToWishlist(){ return $('#wishlist_button'); }
  get emailForm(){ return $('#email'); }
  get orderReference(){ return $('#id_order'); }
  get messageForm(){ return $('#message'); }
  get sendBtn() { return $('#submitMessage'); }
  get contactUsAssert() { return $('.navigation_page'); }


  

  async fillInForm() {
      addStep('Completar form para envíar mensaje de Contact Us.');
      await this.subjectHeading.selectByIndex(1);
      await this.emailForm.setInput('testaccount@testmail.com');
      await this.orderReference.setInput('orderReference');
      await this.messageForm.setInput('Message');
      await super.clickElement(this.sendBtn);

  }

  async getTextAssert() {
    return await this.contactUsAssert.getText();
  }

}
export default new ContactUs();