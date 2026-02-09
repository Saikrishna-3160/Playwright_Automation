import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    //right click - context click

    await page.locator('span.context-menu-one').click({button: 'right'});
    let allOptions: string[] = await page.locator(`ul.context-menu-list span`).allInnerTexts();
    console.log(allOptions);
    await page.getByText('Copy', {exact: true}).click();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();