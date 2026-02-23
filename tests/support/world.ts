import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

export class CustomWorld extends World {
  browser: Browser | undefined;
  context: BrowserContext | undefined;
  page: Page | undefined;
  loginPage: LoginPage | undefined;
  inventoryPage: InventoryPage | undefined;
  checkoutPage: CheckoutPage | undefined;
}

setWorldConstructor(CustomWorld);
