import { Browser, chromium, type Locator, type Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });
    
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //text box should have an <label> or <aria-label>
    await page.getByRole("textbox", {name: 'First Name'}).fill('Sai krishna');
    await page.getByRole("textbox", {name: 'Last Name'}).fill('PW Automation');
    await page.getByRole('checkbox').click();
    //await page.getByRole("button", {name: 'Continue'}).click();
    await page.getByRole("radio", {name: 'Yes'}).click();



    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();