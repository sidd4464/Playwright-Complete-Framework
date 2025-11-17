import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page } from "playwright";

class CustomWorld extends World {
  browser: Browser | undefined;
  page: Page | undefined;
}

setWorldConstructor(CustomWorld);
