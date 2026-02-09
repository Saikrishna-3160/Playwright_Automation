import { Browser, chromium, Page } from "@playwright/test";


(async () => {

    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let name = await page.locator('#input-email').getAttribute('name');
    console.log(name);

    //use getAttribute() method for any attribute, other than the value attribute
    let placeholder = await page.locator('#input-email').getAttribute('placeholder');
    console.log(placeholder);

    //here getAttribute('value') -- this won't work
    //here we need to use inputValue() to fetch the data enetered in the field
    await page.locator('#input-email').fill('saikrishna786@gmail.com');
    let enteredVal = await page.locator('#input-email').inputValue();
    console.log(enteredVal);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
    
    
    

})();