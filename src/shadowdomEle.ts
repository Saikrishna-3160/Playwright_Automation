import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();

    //page--> shadowDom1--> shadowDom2--> input
    //await page.goto('https://selectorshub.com/iframe-in-shadow-dom/', {waitUntil: 'load'});
    //await page.locator('#pizza').fill('Margarita');

    //page--> iframe--> shadowDom--> input
    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');
    await page.frameLocator('(//iframe[@id="pact"])[1]').locator('#tea').fill('Masala Tea');


    
    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();