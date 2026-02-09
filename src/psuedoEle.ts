import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: 'domcontentloaded'});

    let content = await page.evaluate( () => {
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!,
         '::before').getPropertyValue('content')
    })

    console.log('content: ' + content);
    if (content.includes("* ")){
        console.log('first name is a mandatory field');
    }

    let color = await page.evaluate( () => {
        return window.getComputedStyle(document.querySelector('label[for="input-lastname"]')!,
         '::before').getPropertyValue('color')
    })

    console.log('color of lastname is ' + color);
    
    
    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();