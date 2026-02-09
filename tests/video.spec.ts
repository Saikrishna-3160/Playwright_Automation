import {test, Page, Browser, BrowserContext, chromium, expect} from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

test('test 1', async ({page}) => {
    browser = await chromium.launch({channel: 'chrome', headless: false});

    context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600},
        }
    })

    page = await context.newPage();
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', {name: 'Main Menu'})).toBeVisible();
});