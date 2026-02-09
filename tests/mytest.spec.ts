import { test, Page, Locator, expect, firefox} from '@playwright/test';

//test.skip --> skips the test
//test.only --> runs only the following test
//test.fixme --> does not runs this test
//test.slow --> runs the test3 times slow
//test.fail --> diliberately we are failing the test - in the report the test is marked as passed
               //if that is a passed test case, in the report it is showed as failed      

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

test('email is visible', async ({page, browserName}) => {
    //test.slow(browserName === 'firefox', 'This featureis slow in firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', {name: 'E-Mail Address'})).toBeVisible();
});

test('password is visible', async ({page, browserName}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', {name: 'Password'})).toBeVisible();
});

test.fail('new customer header is visible', async ({page, browserName}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('New Customer', {exact: true})).toBeVisible();
});