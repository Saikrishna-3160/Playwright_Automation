import { test, Page, Locator, expect, firefox} from '@playwright/test';

test('title test', async ({page, browserName}) => {
    //test.skip(browserName === 'firefox', 'Feature is not supported in Firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login11');
})