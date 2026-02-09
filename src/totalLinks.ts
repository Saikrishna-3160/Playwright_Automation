import { Browser, chromium, Locator, Page } from "@playwright/test";


//IIFE
(async () => {
    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    });
    let page: Page = await browser.newPage();
    await page.goto('https://www.flipkart.com');

    //total links on the page
    let allLinks: string[] = await page.locator('a[href]').allInnerTexts();
    console.log('total number of links: ' + allLinks.length);
    
    let allImages: Locator[] = await page.locator('//img[@alt]').all();
    console.log('total number of images: '+ allImages.length);

    for (let e of allImages){
        console.log(await e.getAttribute('alt'));
    }
    
    

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
    
})();