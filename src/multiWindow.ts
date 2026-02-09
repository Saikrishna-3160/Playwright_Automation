import { Browser, chromium, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let brCtx = await browser.newContext();
    let page = await brCtx.newPage();

    //create event to Accept Cookies button:
    page.on('framenavigated', async () => {
        let acceptCookiesButton = page.locator('//button[text()="Allow all"]');
        if ( await acceptCookiesButton.isVisible()){
            await acceptCookiesButton.click();
        }
    })

    await page.goto('https://www.orangehrm.com/en/contact-sales', {waitUntil: 'load', timeout: 60000}); //parent window
    let orangeHrmTitle = await page.title();

    await page.locator('//a[contains(@href, "linkedin")]').click();
    await page.getByAltText('facebook').click();
    await page.locator(`a[href="https://x.com/orangehrm"]`).click();
    await page.locator(`a[href="https://www.youtube.com/user/orangehrm"]`).click();

    await page.waitForTimeout(3000);

    let allPages: Page[] = brCtx.pages();
    console.log('total number of window: ' + allPages.length);

    for(let pg of allPages){
        console.log(await pg.title());
        if (await pg.title() !== orangeHrmTitle) {
            await pg.waitForTimeout(1000);
            await pg.close();
        } 
    }
    
    await page.bringToFront();
    console.log(await page.title());
    await page.getByRole('textbox', { name: 'Full name'}).fill('Sai krishna');

    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();

})();