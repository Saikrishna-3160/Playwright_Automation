import { Browser, chromium, Page } from "@playwright/test"


(async () => {

    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1. getByText()
    //await page.getByText('Register Account', {exact: true}).highlight();

    //2. locator + hasText()
    //locator('h1', {hasText: 'Register Account})
    //locator('a', {hasText: 'Privacy Policy'})

    //await page.locator('h1', {hasText: 'Register Account'}).highlight();

    //3. usingtag:text('value') -- webtable with checkbox
    page.locator('h1:text("Register Account")').highlight();


    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();