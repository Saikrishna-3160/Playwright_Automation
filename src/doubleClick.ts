import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://api.jquery.com/dblclick/');
    let frameEle = page.frameLocator('iframe');
    let box = frameEle.locator('div');
    
    //using dblclick:
    //await box.dblclick();

    await box.click({clickCount: 2});

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();