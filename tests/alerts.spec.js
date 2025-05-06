import { test, expect } from '@playwright/test';

test('Handle OK alerts', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //first create an alert/dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    //alertBtn
    //trigger event
    await page.click('#alertBtn');
    await page.waitForTimeout(5000)


})
test('Confirmation dialog alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //first create an alert/dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        //await dialog.accept(); //Will close by using accept
        await dialog.dismiss(); //Will close by using decline
    })

    //trigger event
    await page.click('#confirmBtn');
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000)


})

test('Prompt dialog with input box', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //first create an alert/dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('Djordje Vukmir'); //Will close by using accept
        //await dialog.dismiss(); //Will close by using decline
    })

    //trigger event
    await page.click('#promptBtn');
    await expect(page.locator('#demo')).toHaveText('Hello Djordje Vukmir! How are you today?')
    await page.waitForTimeout(5000)


})