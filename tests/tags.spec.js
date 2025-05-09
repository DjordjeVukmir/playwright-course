import { test, expect } from '@playwright/test'

test('Test1 @sanity', async ({ page }) => {
    console.log('this is test 1')
})

test('Test2 @smoke', async ({ page }) => {
    console.log('this is test 2')
})

test('Test3 @regression', async ({ page }) => {
    console.log('this is test 3')
})

test('Test4 @sanity', async ({ page }) => {
    console.log('this is test 4')
})

test('Test5 @regression', async ({ page }) => {
    console.log('this is test 5')
})