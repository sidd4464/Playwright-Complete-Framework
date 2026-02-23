import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, type Browser } from "playwright";
import type { CustomWorld } from "./world";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let sharedBrowser: Browser | undefined;

setDefaultTimeout(30 * 1000);

BeforeAll(async function () {
  const isHeadless = process.env.HEADLESS === "true";
  const parsedSlowMo = Number(process.env.SLOW_MO ?? "400");
  const slowMo = Number.isFinite(parsedSlowMo) ? parsedSlowMo : 400;

  sharedBrowser = await chromium.launch({
    headless: isHeadless,
    slowMo
  });
});

Before(async function (this: CustomWorld) {
  if (!sharedBrowser) {
    throw new Error("Browser is not initialized");
  }

  this.browser = sharedBrowser;
  this.context = await sharedBrowser.newContext();
  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function (this: CustomWorld) {
  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async function () {
  if (sharedBrowser) {
    await sharedBrowser.close();
  }
});
