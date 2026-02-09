import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();

    //create event listerner for Accept Cookies button:
    //background listerner:
    page.on("framenavigated", async () => {
        let acceptCookies = await page.locator('//button[text()="Allow all"]');
        if (await acceptCookies.isVisible()){
            await acceptCookies.click();
        }
    });

    await page.goto('https://www.orangehrm.com/en/contact-sales');
    

    //target = _blank --> for a new tab/window

    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href, "linkedin")]').click() //open a new tab/window --> popup event will be triggered
    ]);
    
    await page.waitForTimeout(4000);

    console.log(await newTab.title());
    console.log(newTab.url());
    
    await page.waitForTimeout(2000);

    //close the new tab
    await newTab.close();

    await page.bringToFront();
    console.log('parent window title: ' + await page.title());
    
    await page.close();
    await browser.close();

})();