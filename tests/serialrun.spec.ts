import {test, expect, Page} from '@playwright/test';

//these 5 test cases will be run sequentially
test.describe.serial('login feature', () => {

    test('Title Test', async ({page}) => {
        console.log('Account Login');  
    })

    test('Header Test', async ({page}) => {
       console.log('Returning Customer');  
    })

    test('Home Page Test', async () => {
    console.log('Home page test');  
    })

    test('Search Page Test', async () => {
    console.log('Search product test');    
    })

    test('Cart Page Test', async () => {
    console.log('Cart test');    
    })

})

//these 2 test cases will be running in parallel
test('HELLO Test', async () => {
    console.log('Hello test');    
})

test('BYE Test', async () => {
    console.log('BYE test');    
})
