/*
Install allure-playwright using a package manager of your choice. For example:

npm install -D allure-playwright

npm install -g allure-commandline --save-dev


Add allure-playwright as the reporter in the Playwright configuration file:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: "allure-playwright",
});
Or, if you want to use more than one reporter:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [["line"], ["allure-playwright"]],
});
Or pass the same values via the command line:

npx playwright test --reporter=line,allure-playwright
When the test run completes, the result files will be generated in the ./allure-results directory.

You may select another location, or further customize the reporter's behavior with the configuration options.

View the report
You need Allure Report to be installed on your machine to generate and open the report from the result files. See the installation instructions on how to get it.

Generate Allure Report after the tests are executed:

allure generate ./allure-results -o ./allure-report
Open the generated report:

allure open ./allure-report
Allure API
Enhance the report by utilizing the runtime API:

import { describe, test } from "playwright";
import * as allure from "allure-js-commons";

describe("signing in with a password", () => {
  test("sign in with a valid password", async () => {
    await allure.description("The test checks if an active user with a valid password can sign in to the app.");
    await allure.epic("Signing in");
    await allure.feature("Sign in with a password");
    await allure.story("As an active user, I want to successfully sign in using a valid password");
    await allure.tags("signin", "ui", "positive");
    await allure.issue("https://github.com/allure-framework/allure-js/issues/331", "ISSUE-331");
    await allure.owner("eroshenkoam");
    await allure.parameter("browser", "chrome");

    const user = await allure.step("Prepare the user", async () => {
      return await createAnActiveUserInDb();
    });

    await allure.step("Make a sign-in attempt", async () => {
      await allure.step("Navigate to the sign in page", async () => {
        // ...
      });

      await allure.step("Fill the sign-in form", async (stepContext) => {
        await stepContext.parameter("login", user.login);
        await stepContext.parameter("password", user.password, "masked");

        // ...
      });

      await allure.step("Submit the form", async () => {
        // ...
        // const responseData = ...

        await allure.attachment("response", JSON.stringify(responseData), { contentType: "application/json" });
      });
    });

    await allure.step("Assert the signed-in state", async () => {
        // ...
    });
  });
});
More details about the API are available at https://allurereport.org/docs/playwright-reference/.
**********

import { defineConfig } from '@playwright/test';
import { test, expect } from '@playwright/test'


test('Test1', async ({ page }) => {
    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
})


test('Test2', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/')
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')
})

*/