import { test, expect } from '@playwright/test';


//single checkbox
test('Handle Checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.getByRole('checkbox').first().check();
    await page.getByRole('checkbox').nth(1).uncheck();

    expect(await page.getByRole('checkbox').first()).toBeChecked();
    expect(await page.getByRole('checkbox').nth(1).isChecked()).toBeFalsy();

});

//multiple checkboxes

test('Handle Checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkboxXPaths = [
        '//*[@id="checkboxes"]/input[1]',
        '//*[@id="checkboxes"]/input[2]'
    ];

    // First loop to check all checkboxes
    for (const xpath of checkboxXPaths) {
        const checkbox = page.locator(`xpath=${xpath}`);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    // Second loop to uncheck if checked
    for (const xpath of checkboxXPaths) {
        const checkbox = page.locator(`xpath=${xpath}`);
        const isChecked = await checkbox.isChecked();
        if (isChecked) {
            await checkbox.uncheck();
        }
        await expect(checkbox).not.toBeChecked();
    }
});