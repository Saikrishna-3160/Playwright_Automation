import { Browser, chromium, type Locator, type Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });
    
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //find element having alt tag: <img alt='naveenopencart'>
    //await page.getByAltText('naveenopencart').click();

    //await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    // await page.getByTestId('username-input').fill('Naveen Automation Labs');
    // await page.getByTestId('home-nav-btn').click();

    //find element using the title attribute value
    await page.getByTitle('naveenopencart').click();


    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();