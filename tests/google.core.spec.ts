import { chromium, type Locator, type Page } from "@playwright/test";

(async () => {
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });
    
    const page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const title = await page.title();
    const url = page.url();
    
    console.log(`Page title: ${title}`);
    console.log(`Page URL: ${url}`);

    const emailInput = page.locator('#input-email');
    await emailInput.fill('naveen@gmail.com');
    
    await browser.close();
})();