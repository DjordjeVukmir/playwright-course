import { test, expect } from '@playwright/test'


test('test1', async ({ page }) => {
    console.log('This is test 1...')
})

test('test2', async ({ page }) => {
    console.log('This is test 2...')
})

//.only - executes only .only annotated test/s
//.skip - skips the annotated test
//.fixme

test('test3', async ({ page }) => {
    test.fixme();
    console.log('this is a non finished test')
    //will be skipped
})

//fail
test('test4', async ({ page }) => {
    test.fail() // expected
    console.log('Fail')
    expect(1).toBe(3); //actual - if fail is expected and expect is a fail, test will pass

    //will be skipped
})


test('Test5', async ({ page }) => {
    //test.slow() --- triples the timeout (30s>90s, or any provided timeout x 3)
    console.log('test 5, slow')
    await page.goto('https://testautomationpractice.blogspot.com/')

})
