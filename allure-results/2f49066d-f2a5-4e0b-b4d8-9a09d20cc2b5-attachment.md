# Test info

- Name: Home page test
- Location: C:\Users\Nera the dog\Desktop\Playwright\tests\hooks3.spec.js:23:5

# Error details

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('.hrfech') to be visible

    at C:\Users\Nera the dog\Desktop\Playwright\tests\hooks3.spec.js:25:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | let page;
   4 |
   5 | test.beforeAll(async ({ browser }) => {
   6 |     //login
   7 |     page = await browser.newPage()
   8 |     await page.goto('https://demoblaze.com/')
   9 |     await page.click('#login2')
  10 |     await page.fill('#loginusername', '123')
  11 |     await page.fill('#loginpassword', '123')
  12 |     await page.click('button[onclick="logIn()"]')
  13 |
  14 | }
  15 |
  16 | );
  17 |
  18 | test.afterAll(async () => {
  19 |     await page.locator('#logout2').click()
  20 | })
  21 |
  22 |
  23 | test('Home page test', async () => {
  24 |
> 25 |     await page.waitForSelector('.hrfech')
     |                ^ Error: page.waitForSelector: Target page, context or browser has been closed
  26 |     const products = await page.$$('.hrefch')
  27 |     await expect(products).toHaveLength(9)
  28 |
  29 |     //add product
  30 |     await page.locator('//*[@id="tbodyid"]/div[1]/div/a').click()
  31 |     await page.locator('.btn.btn-success.btn-lg').click();
  32 |
  33 |     page.on('dialog', async dialog => {
  34 |         expect(dialog.type()).toContain('alert')
  35 |         expect(dialog.message()).toContain('Product added')
  36 |         await dialog.accept();
  37 |     })
  38 |
  39 |     await page.waitForTimeout(2000)
  40 |
  41 |
  42 | })
  43 |
```