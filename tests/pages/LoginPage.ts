import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async login(user='standard_user', pass='secret_sauce') {
    await this.page.fill('#user-name', user);
    await this.page.fill('#password', pass);
    await this.page.click('#login-button');
  }
}
