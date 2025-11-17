import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  async startCheckout() {
    await this.page.click('#checkout');
  }

  async fillInformation() {
    await this.page.fill('#first-name','John');
    await this.page.waitForTimeout(1000); // small wait to simulate user typing
    await this.page.fill('#last-name','Doe');
    await this.page.waitForTimeout(1000); // small wait to simulate user typing
    await this.page.fill('#postal-code','12345');
    await this.page.waitForTimeout(1000); // small wait to simulate user typing
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }

  async isOrderComplete() {
    return this.page.isVisible('.complete-header');
  }
}
