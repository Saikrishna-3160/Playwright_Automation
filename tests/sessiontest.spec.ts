import { test, Browser, chromium } from '@playwright/test';

test.use({storageState: 'auth/session.json'});

test('navigate to homepage without login', async ({ page }) => {

    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');

})

//ideal use cases:
//sessionid, cookies, tokenID -- 24 hrs (auto logout)

//won't work:
//otp, oauth2.0, 2FactorAuth, MFA, Recaptcha