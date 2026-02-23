import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import type { CustomWorld } from "../support/world";

Given("the user logs into SauceDemo", async function (this: CustomWorld) {
  if (!this.loginPage) throw new Error("LoginPage is not initialized");
  await this.loginPage.navigate("https://www.saucedemo.com/");
  await this.loginPage.login();
});

When("the user adds 3 random items to the cart", async function (this: CustomWorld) {
  if (!this.inventoryPage) throw new Error("InventoryPage is not initialized");
  await this.inventoryPage.addRandomItems(3);
  await this.inventoryPage.openCart();
});

When("the user proceeds to checkout", async function (this: CustomWorld) {
  if (!this.checkoutPage) throw new Error("CheckoutPage is not initialized");
  await this.checkoutPage.startCheckout();
});

When("the user enters checkout information", async function (this: CustomWorld) {
  if (!this.checkoutPage) throw new Error("CheckoutPage is not initialized");
  await this.checkoutPage.fillInformation();
  await this.checkoutPage.finishOrder();
});

Then("the order should be successfully placed", async function (this: CustomWorld) {
  if (!this.checkoutPage) throw new Error("CheckoutPage is not initialized");
  const success = await this.checkoutPage.isOrderComplete();
  assert.ok(success, "Order not completed successfully");
});
