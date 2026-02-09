import {test, expect, Page} from '@playwright/test';

test.describe('login feature', () => {

    test.beforeAll(async ({page}) => {
        await page.goto('====check for the DB connection and connect to DB====');
    })

    test.beforeEach(async ({page}) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    })

    test.afterEach(async ({page}) => {
        await page.close();
    })

    test.afterAll(async ({page}) => {
        await page.goto('====close the DB connectionB====');
    })

    test('Title Test', async ({page}) => {
        await expect(page).toHaveTitle('Account Login');  
    })

    test('Header Test', async ({page}) => {
        await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();  
    })

})