import $ from 'webdriverio/build/commands/element/$';
import BasePage from '../pages/base.page';

class ProductPage extends BasePage {

  //WebElements
  get productAddToCart(){ return $('[name="Submit"]'); }
  get proceedCheckOut() { return $('[title = "Proceed to checkout"]'); }
  get closeWishlistBtn(){ return $('[title="Close"]'); }
  get messageAddedWishlist(){ return $('.fancybox-error'); }
  get accountBtn(){ return $('.account'); }
  get wishlistBtn() { return $('#wishlist_button'); }

  

  async addToCartProduct() {
      await super.clickElement(await this.productAddToCart);
  }

  async closeWishlist(){
      await super.clickearElemento(await this.closeWishlistBtn);
 }

  async goToAccount(){
      await super.clickElement(await this.accountBtn);
  }

  async addProductToWishlist(){
    await super.clickElement(await this.wishlistBtn);
}
}
export default new ProductPage();