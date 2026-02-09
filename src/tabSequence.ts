import { Browser, chromium, Page } from "@playwright/test";
import { SrvRecord } from "node:dns";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.locator('#input-firstname').focus();
    await page.locator('#input-firstname').pressSequentially('Testing', {delay: 200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('Automation', {delay: 200});
    await page.keyboard.press('Tab');
    await page.keyboard.type(getrandomEmailId(), {delay: 200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('9090976756', {delay: 200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('Automation@786', {delay: 200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('Automation@786', {delay: 200});
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

   

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();

function getrandomEmailId(): string {
    return `Opencart` + Date.now().toString() + `@mail.com`;
}