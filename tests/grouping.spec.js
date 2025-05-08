import { test, expect } from '@playwright/test'

test.beforeAll(async () => {
    console.log('this is beforeAll hook')
})
test.beforeEach(async () => {
    console.log('this is beforeEach hook')
})
test.afterAll(async () => {
    console.log('this is afterAll hook')
})
test.afterEach(async () => {
    console.log('this is afterEach hook')
})



test.describe('Group1', () => {
    test('Test 1', async ({ page }) => {
        console.log('This is test 1....')
    })

    test('Test 2', async ({ page }) => {
        console.log('This is test 2....')
    })
})

test.describe('Group2', () => {
    test('Test 3', async ({ page }) => {
        console.log('This is test 3....')
    })

    test('Test 4', async ({ page }) => {
        console.log('This is test 4....')
    })
})

