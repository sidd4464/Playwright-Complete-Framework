import { chromium } from "playwright";
import { Given, When, Then, Before, After, AfterStep } from "@cucumber/cucumber";
import assert from "assert";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let checkoutPage: CheckoutPage;

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();

  loginPage = new LoginPage(this.page);
  inventoryPage = new InventoryPage(this.page);
  checkoutPage = new CheckoutPage(this.page);
});

AfterStep(async function () {
  await this.page.waitForTimeout(1000); // 1 second wait after each step
});

After(async function () {
  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});

Given("the user logs into SauceDemo", async function () {
  await loginPage.navigate("https://www.saucedemo.com/");
  await loginPage.login();
});

When("the user adds 3 random items to the cart", async function () {
  await inventoryPage.addRandomItems(3);
  await inventoryPage.openCart();
});

When("the user proceeds to checkout", async function () {
  await checkoutPage.startCheckout();
});

When("the user enters checkout information", async function () {
  await checkoutPage.fillInformation();
  await checkoutPage.finishOrder();
});

Then("the order should be successfully placed", async function () {
  const success = await checkoutPage.isOrderComplete();
  assert.ok(success, "Order not completed successfully");
});
