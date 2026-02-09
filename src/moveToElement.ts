import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();

    await page.goto('https://www.spicejet.com/');
    await page.getByText('Add-ons', {exact: true}).hover();
    await page.getByTestId('test-id-Taxi').click();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();