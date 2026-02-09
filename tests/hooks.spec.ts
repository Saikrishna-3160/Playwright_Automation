import {test, expect, Page} from '@playwright/test';

//beforeAll --> runs before all the test cases (don't add any page logic here)
//beforeEach --> runs after beforeAll (use for page, login scenarios)
//afterEach --> runs after test cases execution
//afterAll --> runs at the end, after the afterEach

test.beforeAll(async () => {
    console.log('beforeAll-- server is up and running');
    console.log('beforeAll-- chrome browser is open');
})

test.beforeEach(async () => {
    console.log('beforeEach -- user is logged in'); 
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

test.afterEach(async () => {
    console.log('afterEach -- logout'); 
})

test.afterAll(async () => {
    console.log('afterAll -- close browser');
    console.log('afterAll -- delete data');
})