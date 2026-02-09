import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();

    //create event listerner for Accept Cookies button:
    //background listerner:
    // page.on("framenavigated", async () => {
    //     let acceptCookies = page.locator('//button[text()="Allow all"]');
    //     if (await acceptCookies.isVisible()){
    //         await acceptCookies.click();
    //     }
    // });

    await page.goto('https://www.orangehrm.com/en/contact-sales', {waitUntil: 'load', timeout: 60000});
    await page.locator('//button[text()="Allow all"]').click();
    
    //target = _blank --> for a new tab/window

    //Opening Linkedin Tab
    let [linkedinTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href, "linkedin")]').scrollIntoViewIfNeeded(), //open a new tab/window --> popup event will be triggered
        page.locator('//a[contains(@href, "linkedin")]').click()
    ]);
    
    await page.waitForTimeout(4000);
    console.log(await linkedinTab.title());

    //Opening Facebook Tab
    let [facebookTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByAltText('facebook').scrollIntoViewIfNeeded(),
        page.getByAltText('facebook').click()
    ])

    await page.waitForTimeout(4000);
    console.log(await facebookTab.title());

    //Opening X Tab
    let [xTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`a[href="https://x.com/orangehrm"]`).scrollIntoViewIfNeeded(),
        page.locator(`a[href="https://x.com/orangehrm"]`).click()
    ])

    await page.waitForTimeout(4000);
    console.log(await xTab.title());

    //Opening Youtube Tab:
    let [youtubeTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`a[href="https://www.youtube.com/user/orangehrm"]`).scrollIntoViewIfNeeded(),
        page.locator(`a[href="https://www.youtube.com/user/orangehrm"]`).click()
    ])

    await page.waitForTimeout(4000);
    console.log(await youtubeTab.title());

    await linkedinTab.close();
    await xTab.close();
    await facebookTab.close();
    await youtubeTab.close();

    await page.bringToFront();
    console.log("================");
    console.log(await page.title());
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Sai krishna');


    //Opening Instagram Tab:
    // let [instagramTab] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.locator(`a[href="https://www.instagram.com/orangehrm_inc"]`).scrollIntoViewIfNeeded(),
    //     page.locator(`a[href="https://www.instagram.com/orangehrm_inc"]`).click()
    // ])

    // await page.waitForTimeout(4000);
    // console.log(await instagramTab.title());
    
    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();

})();