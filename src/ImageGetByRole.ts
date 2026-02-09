import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // //image --> name: -> alt value
    // await page.getByRole('img', { name: 'naveenopencart' }).highlight();
    
    await page.goto('https://www.amazon.co.in/');
    await page.getByRole('img', {name: 'OnePlus | Starting ₹22,999*'}).click();

   // await page.getByRole('img').highlight();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

        
})();


