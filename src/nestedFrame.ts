import { Browser, chromium, expect, FrameLocator, Locator, Page } from "@playwright/test"


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1: FrameLocator = page.frameLocator(`(//iframe[@id='pact1'])[1]`);
    let frame2: FrameLocator = frame1.frameLocator(`(//iframe[@id='pact2'])[1]`);
    let frame3: FrameLocator = frame2.frameLocator(`(//iframe[@id='pact3'])[1]`);

    await frame1.locator(`#inp_val`).fill('Testing');
    await frame2.locator(`#jex`).fill('Selenium');
    await frame3.locator(`#glaf`).fill('Playwright');

    await page.waitForTimeout(3000);

    await frame1.locator(`#inp_val`).fill('New Automation Testing');
    await frame2.locator(`#jex`).fill('Cypress');
    await frame3.locator(`#glaf`).fill('Typescript');

    let header = await page.locator('h3').innerText();
    console.log(header);    

    //Total no. of frames
    console.log();
    

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();