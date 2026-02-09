import {test, expect, Page} from '@playwright/test';

test.describe('login feature', () => {

    test.beforeAll(async () => {
        console.log('setup the system');
    })

    test.afterAll(async () => {
        console.log('teardown the system');
    })

    test.beforeEach(async () => {
        console.log('open the url');
    })

    test.afterEach(async () => {
        console.log('close the page');
    })

    test('Home Page Test', async () => {
    console.log('Home page test');    
    })

    test('Search Page Test', async () => {
    console.log('Search product test');    
    })


})