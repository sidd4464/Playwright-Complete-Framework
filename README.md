Playwright Complete Automation Framework
(TypeScript · Cucumber BDD · Page Object Model · Allure Reports · Custom World · Teardown · Debug Waits)

This repository contains a fully implemented automation framework using Playwright, TypeScript, Cucumber (BDD), Page Object Model (POM), and Allure Reporting.
It is designed for scalable, maintainable, and production-grade UI test automation.

🚀 Features
✅ Playwright + TypeScript

Modern, fast, and reliable browser automation with full TypeScript typings.

✅ Cucumber (BDD)

Human-readable test scenarios using Gherkin syntax.

✅ Page Object Model (POM)

Clean separation of page actions and test logic.

✅ Allure Reporting

Rich test reporting with screenshots and detailed steps.

✅ Custom Cucumber World

Ensures clean handling of browser/page instances per scenario.

✅ Automatic Teardown

Browser and pages close correctly after each scenario.

✅ Debug Mode

Global waits after steps + non-headless mode for easier debugging.

📂 Project Structure
playwright-complete-framework/
│
├── cucumber.js                     # Cucumber config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies & scripts
│
└── tests/
    ├── features/                   # Gherkin BDD scenarios
    │    └── checkout.feature
    │
    ├── steps/                      # Step definitions
    │    └── checkoutSteps.ts
    │
    ├── pages/                      # Page Object Model classes
    │    ├── BasePage.ts
    │    ├── LoginPage.ts
    │    ├── InventoryPage.ts
    │    └── CheckoutPage.ts
    │
    └── support/
         └── world.ts               # Custom Cucumber World (browser/page context)

🛠️ Installation

Ensure Node.js (≥16) is installed, then run:

npm install

▶️ Running Tests

To execute all BDD scenarios:

npm test


This automatically launches the browser in headed mode.

📸 Allure Report
Generate the report:
npm run allure:report

Open the interactive HTML report:
npm run allure:open


The report includes:

Test steps

Failures

Screenshots

Execution timeline

Attachments

🧱 Framework Flow
🧩 1. Before Hook

Creates a new Playwright browser + page instance for each scenario.

🧩 2. Step Execution

Interacts with POM classes to perform UI actions defined in Gherkin steps.

🧩 3. AfterStep Hook

Applies a global wait (1 second) for visual debugging.

🧩 4. After Hook

Tears down:

page

browser

Ensures no zombie processes left running.

📑 Writing New Tests
1. Create a new feature file under:

tests/features/*.feature

2. Create matching step definitions under:

tests/steps/*.ts

3. Implement UI actions in POM files inside:

tests/pages/*.ts

The framework auto-loads everything via cucumber.js.

🧪 Example Gherkin Scenario
Scenario: User completes checkout successfully
  Given the user logs into SauceDemo
  When the user adds 3 random items to the cart
  And the user proceeds to checkout
  And the user enters checkout information
  Then the order should be successfully placed

📌 Dependencies

Playwright

TypeScript

Cucumber

ts-node

Allure-commandline

Node.js

Assert

💡 Troubleshooting
❗ Browser doesn't close

Ensure you're using the Custom World (world.ts).

❗ "Module not found" for .ts files

This framework uses CommonJS with ts-node — imports do NOT use .ts extensions.

❗ Allure report empty

Delete old results:

rm -rf allure-results allure-report


and re-run.

🤝 Contributing

PRs and improvements welcome!
Follow conventional commits and ensure tests pass before pushing.