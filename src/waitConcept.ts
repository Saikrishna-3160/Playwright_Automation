import { Browser, chromium, expect, FrameLocator, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    page.setDefaultTimeout(10000);
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {timeout: 5000});

    //let firstname: Locator = page.getByRole('textbox', { name: 'First Name' }); //no error in case of wrong locator
    //auto wait will be applied only when any action is performed
    // await firstname.fill('Sai krishna'); //error will be thrown -
    //Timeout 10000ms exceeded.
    // - waiting for locator

    //no need to write the wait, if we are performing any action on the locator

    //Explicit wait in PW: dynamic wait: for a specific locator
    //firstname.waitFor({state: 'visible', timeout: 5000});
    //firstname.fill('Sai krishna');

    //fill the reg form: success message on the page:
    //await page.locator('#successmesg').waitFor({state: 'visible', timeout: 5000});

    //assertions in PW: using expect : default auto wait
    //expect(page.getByRole('textbox', {name: 'First Name'})).toBeVisible();

    //wait for Selector from page lib:
    //legacy + not good practice to use
    //only xpath/css/text/htmltag
    (await page.waitForSelector('#input-firstnam')).fill('Testing');

    //its only for the page loading concept:
    page.waitForLoadState("load"); //page is fully loaded
    page.waitForLoadState("domcontentloaded"); //DOM is fully loaded
    page.waitForLoadState("networkidle"); //network api are done

    //dialog, pop-up
    //page.waitForEvent();

    //wait for url:
    page.waitForURL("https://texasai.ai"); //wait for the url is completely loaded

    //
    
    
    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();