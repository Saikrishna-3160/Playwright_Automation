import { chromium, Browser, Page, Locator } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://www.orangehrm.com/en/contact-sales/');

    let contactSales: Locator = page.getByRole('button', {name : 'Contact Sales'}).first();
    //get the background color of the element:
    let bgColor = await contactSales.evaluate( ele => getComputedStyle(ele).backgroundColor);
    console.log("Background color: " + bgColor);

    //get the text color of the element:
    let txtColor = await contactSales.evaluate( ele => getComputedStyle(ele).color);
    console.log('Text color: ' + txtColor);

    //generate alert
    //await page.evaluate( () => alert('Hello Guys'));
    

    await page.waitForTimeout(2000);
    await page.close();
    await browser.close();
    

})();