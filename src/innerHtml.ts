import { Browser, chromium, Locator, Page } from "@playwright/test";


//IIFE
(async () => {
    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let headerHtml = await page.getByRole('heading', {name: 'Register Account'}).innerHTML();
    console.log(headerHtml);
    
    let firstNameHtml = await page.locator('#input-firstname').innerHTML();
    console.log(firstNameHtml);

    console.log('Bye!!');
    

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
    
})();