import { test, expect } from '@playwright/test'

var userId;

test('GET request', async ({ request }) => {
    const getresponse = await request.get('https://reqres.in/api/users?page=2')
    console.log(await getresponse.json())
    await expect(getresponse.status()).toBe(200)

})

test('POST request', async ({ request }) => {

    const postrequest = await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "morpheus",
                "job": "leader"
            },
            headers: {
                "x-api-key": "reqres-free-v1",
                "Accept": "application/json"
            }
        }

    )

    const postData = await postrequest.json()
    userId = postData.id;
    console.log("User ID is: ", userId)

})
test('PUT request', async ({ request }) => {
    const putResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
        data: {

            "name": "morpheus",
            "job": "zion resident"
        },
        headers: {
            "x-api-key": "reqres-free-v1",
            "Accept": "application/json",
            "Content-Type": 'application/json'
        }
    });

    const putData = await putResponse.json()

    expect(putData.name).toBe('morpheus')
    expect(putData.job).toBe('zion resident')
    expect(putResponse.status()).toBe(200)

})
test('DELETE request', async ({ request }) => {

    const deleteRequest = await request.delete(`https://reqres.in/api/users/${userId}`, {
        headers: {
            "x-api-key": "reqres-free-v1",
            "Accept": "application/json",
            "Content-Type": 'application/json'
        }
    })
    await expect(deleteRequest.status()).toBe(204)
})