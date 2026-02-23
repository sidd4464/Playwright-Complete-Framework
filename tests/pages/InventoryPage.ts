import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  async addRandomItems(count: number) {
    await this.page.waitForSelector('.inventory_item', { state: 'visible' });
    const buttons = this.page.locator('.inventory_item button');
    const total = await buttons.count();
    const indexes = Array.from({ length: total }, (_, i) => i)
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(count, total));

    for (const index of indexes) {
      await buttons.nth(index).click();
    }
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
    await this.page.waitForSelector('#checkout', { state: 'visible' });
  }
}
