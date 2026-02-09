import { Browser, chromium, expect, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    // await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    // let source = page.locator('#column-a');
    // let target = page.locator('#column-b');

    // await source.dragTo(target);
    // await expect(target).toContainText('A');

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    await source.dragTo(target);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();