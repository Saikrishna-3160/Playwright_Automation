import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://www.orangehrm.com/', {waitUntil: 'domcontentloaded'});

    //1. ScrollIntoViewIfNeeded
    await page.locator('//button[text()="Allow all"]').click();
    //await page.getByRole('link',{name: 'Careers'}).scrollIntoViewIfNeeded();
    //await page.getByRole('link',{name: 'Careers'}).click();

    //2. Scroll down 1000 pixels:
    // await page.evaluate( () => {
    //     window.scrollBy(0, 1000);
    // });
    // await page.waitForTimeout(2000);
    // await page.evaluate( () => {
    //     window.scrollBy(0, 2000);
    // });

    //3. Scroll down to the bottom of the page:
    await page.evaluate( () => {
        window.scrollTo(0, document.body.scrollHeight);
    })
    await page.waitForTimeout(2000);
    
    //4. Scroll to the top of the page
    await page.evaluate( () => {
        window.scrollTo(0, 0);
    })
    await page.waitForTimeout(2000);

    //3. Scroll down to the bottom of the page:
    await page.evaluate( () => {
        window.scrollTo(0, document.body.scrollHeight);
    })
    
    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();