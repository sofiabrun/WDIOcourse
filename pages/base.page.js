const PAGE_TIMEOUT = 10000
 export default class BasePage {

  get mainPageBtn() { return $('[alt = "My Store"]'); }


   async open(url) {
       await browser.url(`${url}`);
   }

   async clickElement(category) {
       await category.waitForClickable({ timeout: PAGE_TIMEOUT });
       await category.click();
   }

   async goToHomePage(){
     await super.clickElement(await this.mainPageBtn);
   }


 }
