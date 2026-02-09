import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {

    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://classic.freecrm.com/register/');

    let submitBtn: Locator = page.locator('#sign-in-btn');
    let isVisible: boolean = await submitBtn.isVisible(); //true
    console.log(isVisible);

    let isEnabled: boolean = await submitBtn.isEnabled(); //true
    console.log(isEnabled);

    let isDisabled: boolean = await submitBtn.isDisabled(); //false
    console.log(isDisabled);
    
    //checking the checkbox
    let checkbox: Locator = page.locator('//span[text()="I agree to the"]');
    let chkisVisible: boolean = await submitBtn.isVisible(); //true
    console.log(chkisVisible);

    let chkisEnabled: boolean = await submitBtn.isEnabled(); //true
    console.log(chkisEnabled);

    let chkisDisabled: boolean = await submitBtn.isDisabled(); //false
    console.log(chkisDisabled);


    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
    

})();