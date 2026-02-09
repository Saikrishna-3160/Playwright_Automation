import { test } from "@playwright/test";


test('check page title', async ({ page }) => {
    await page.goto('https://amazon.com', {waitUntil: 'load',
        referer: 'https://www.abc.com'
    });

    let title = await page.title();
    console.log('page title: ' + title);
})