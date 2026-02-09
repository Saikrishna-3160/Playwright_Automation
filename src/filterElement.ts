import { Browser, chromium, Locator, Page } from "@playwright/test";


//IIFE
(async () => {
    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    });
    let page: Page = await browser.newPage();
    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/logon');

    //get all the footers -- 16
    //out of 16, capture that footer link where text = Privacy Policy
    
    // let footersEle: Locator = page.locator('footer a');
    // footersEle.filter({hasText: 'Privacy Policy', visible: true}).click();

    //use case: 2
    //search scenario:
    // await page.goto('https://www.google.com');
    // await page.locator(`[name='q']`).fill('selenium testing');
    // await page.locator(`[role='listbox'] li [role='option']`).filter({hasText: 'interview'}).click();

    await page.goto('https://www.amazon.co.in');
    await page.getByPlaceholder('Search Amazon.in').fill('macbook');
    await page.locator(`div[role='row'] span`).filter({hasText: 'pro m5'}).click();


    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
    
})();