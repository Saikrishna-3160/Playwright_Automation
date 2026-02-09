import { test, Page, Locator, expect, firefox} from '@playwright/test';

//test.describe --> group the test cases together

test.describe('basic test suite', () => {
    test('title test', async ({page, browserName}) => {
    //test.skip(browserName === 'firefox', 'Feature is not supported in Firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login');
})

test('url test', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveURL(/.*account\/login*./);
})

test('header is visible', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();
});
})

test.describe('advanced test suit', () => {
    test('email is visible', async ({page, browserName}) => {
    //test.slow(browserName === 'firefox', 'This featureis slow in firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', {name: 'E-Mail Address'})).toBeVisible();
});

test('password is visible', async ({page, browserName}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', {name: 'Password'})).toBeVisible();
});

test('new customer header is visible', async ({page, browserName}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('New Customer', {exact: true})).toBeVisible();
});
})
