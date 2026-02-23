import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  async startCheckout() {
    await this.page.click('#checkout');
    await this.page.waitForSelector('#first-name', { state: 'visible' });
  }

  async fillInformation() {
    await this.page.fill('#first-name','John');
    await this.page.fill('#last-name','Doe');
    await this.page.fill('#postal-code','12345');
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
    await this.page.waitForSelector('.complete-header', { state: 'visible' });
  }

  async isOrderComplete() {
    return this.page.isVisible('.complete-header');
  }
}
