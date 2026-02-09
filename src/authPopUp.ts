import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    let context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    })

    let page: Page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/basic_auth')
    //basic auth pop up: username/password

    //let username = 'admin';
    //let password = 'admin';
    //username:password + @ + url --> this approch will fail if the credentails contain '@'
    //await page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();

