import $ from 'webdriverio/build/commands/element/$';
import BasePage from '../pages/base.page';

class HomePage extends BasePage {

  //WebElements

  get categoryName(){ return $('li:first-child'); }
  get signIn(){ return $('.login'); }
  get blockBestSeller(){ return $('[href="#blockbestsellers"]'); }
  get productElement(){ return $('.wishlistProd_1'); }
  get contactUs(){ return $('#contact-link'); }
  get clickProductBtn(){ return $('[data-id-product="7"]'); }
  get productName(){ return $('#layer_cart_product_title'); }
  get closeProductAdded() { return $('[title="Close window"]'); }
  get proceedToCheckout() { return $('[title="Proceed to checkout"]'); }
  get textAssertMainPage() { return $('#editorial_image_legend'); }

  

    async clickCategory(){
      addStep('Clickea categoría.');
      await super.clickElement(await this.categoryName);
    }

    async clickBestSeller(){
      addStep('Clickea en la categoría Best Seller.');
      await super.clickElement(await this.blockBestSeller);
    }

    async clickProduct(){
      addStep('Clickea Add to Cart.');
      await super.clickElement(await this.clickProductBtn);
    }

    async closeProduct(){
      addStep('Cierra Pop Up del producto luego de agregado al Shopping Cart.');
      await super.clickElement(await this.closeProductAdded);
    }

    async goToCheckOut(){
      addStep('Go to the Shopping Cart.');
      await super.clickElement(await this.proceedToCheckout);
    }

    async goToContactUs(){
      addStep('Go to the Contact Us page.');
      await super.clickElement(await this.contactUs);
    }

    async goToSignIn(){
      addStep('Se dirige a Sign In.');
      await super.clickElement(await this.signIn);
    }
    //async getTextAssertMainPage(){
    //  return (await this.textAssertMainPage).getText();
    // }


}

export default new HomePage();