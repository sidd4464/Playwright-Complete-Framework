import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async login(user='standard_user', pass='secret_sauce') {
    await this.page.waitForSelector('#user-name', { state: 'visible' });
    await this.page.fill('#user-name', user);
    await this.page.fill('#password', pass);
    await this.page.click('#login-button');
    await this.page.waitForSelector('.inventory_list', { state: 'visible' });
  }
}
