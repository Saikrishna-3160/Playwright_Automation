import { test, Browser, chromium, expect } from '@playwright/test';


test('store login session', async ({ page }) => {

    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // await page.locator('#input-email').fill('sktest786@test.com');
    // await page.locator('#input-password').fill('Krishna#123');
    // await page.locator('//input[@value="Login"]').click();
    // await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    // await page.context().storageState({ path: 'auth/session.json'});

    await page.goto('https://dev.owlintel.ai/login', {timeout: 60_000, waitUntil: 'load'});
    await expect(page.getByRole('img', { name: 'ISO' })).toBeVisible({timeout: 120000});
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('saikrishna');
    await page.getByRole('textbox', { name: 'Enter Password' }).click();
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Wh00ster@2024');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Enter security answer' }).fill('te2020');
    await page.getByRole('button', { name: 'Submit Answer' }).click();
    //await page.waitForTimeout(10000);
    await page.waitForURL('https://dev.owlintel.ai/dashboard/landing', {timeout: 60_000, waitUntil: 'load'});

    await page.context().storageState({ path: 'auth/OWLsession.json'});

})