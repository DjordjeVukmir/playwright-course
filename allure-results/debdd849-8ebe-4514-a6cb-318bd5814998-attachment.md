# Test info

- Name: POST request
- Location: C:\Users\Nera the dog\Desktop\Playwright\tests\api.spec.js:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
    at C:\Users\Nera the dog\Desktop\Playwright\tests\api.spec.js:28:40
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |
   3 |
   4 | test('GET request', async ({ request }) => {
   5 |     const getresponse = await request.get('https://reqres.in/api/users?page=2')
   6 |     console.log(await getresponse.json())
   7 |     await expect(getresponse.status()).toBe(200)
   8 |
   9 | })
  10 |
  11 | test('POST request', async ({ request }) => {
  12 |
  13 |     const postreponse = await request.post('https://reqres.in/api/users',
  14 |         {
  15 |             data: {
  16 |
  17 |                 "name": "morpheus",
  18 |                 "job": "leader"
  19 |             },
  20 |             headers: {
  21 |                 "Accept": "application/json"
  22 |             }
  23 |         }
  24 |
  25 |
  26 |     )
  27 |     console.log(await postreponse.json())
> 28 |     await expect(postreponse.status()).toBe(200)
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |
  30 | })
  31 | test('PUT request', async ({ request }) => {
  32 |
  33 | })
  34 | test('DELETE request', async ({ request }) => {
  35 |
  36 | })
```