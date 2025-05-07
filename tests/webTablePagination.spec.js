import { test, expect } from '@playwright/test';

test('Handle table pagination', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')


    const table = await page.locator('#productTable')

    // total # of rows and columns
    const columns = table.locator('thead tr th');
    const count = await columns.count();

    console.log('Number of columns: ', await columns.count())

    const rows = await table.locator('tbody tr')
    console.log('Number of rows: ', await rows.count())

    for (let i = 0; i < count; i++) {
        const columnText = await columns.nth(i).textContent();
        console.log('Column:', columnText);
    }

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    // select a product from table
    /*
        for (let i = 0; i < count; i++) {
            const rowText = await rows.nth(i).textContent();
            console.log('Row:', rowText);
        }
    */

    /*

const matchedRow = await rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
})
await matchedRow.locator('input').check();

 
*/

    //reusaable function for the row matching above
    //select multiple products by using a function
    /*
        async function selectProduct(rows, page, name) {
            const matchedRow = await rows.filter({
                has: page.locator('td'),
                hasText: name
            })
            await matchedRow.locator('input').check();
        }
    
        await selectProduct(rows, page, 'Smartwatch')
        await selectProduct(rows, page, 'Tablet')
        await selectProduct(rows, page, 'Laptop')
        await page.waitForTimeout(3000)
        */

    //print all the product details using loop
    //outer loop for rows
    for (let i = 0; i < await rows.count(); i++) {
        //inner loop for columns
        const row = rows.nth(i)
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }

    //read data from all the pages in the table

    const numberOfPages = await page.locator('#pagination li a')
    await console.log('Number of pages: ', await numberOfPages.count())

    for (let p = 0; p < await numberOfPages.count(); p++) {
        if (p > 0) {
            await numberOfPages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            //inner loop for columns
            const row = rows.nth(i)
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }

    await page.waitForTimeout(5000)

})