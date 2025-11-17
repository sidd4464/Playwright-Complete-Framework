import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  async addRandomItems(count: number) {
    const buttons = await this.page.$$('.inventory_item button');
    const chosen = buttons.sort(() => 0.5 - Math.random()).slice(0, count);
    for (const btn of chosen) await btn.click();
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
