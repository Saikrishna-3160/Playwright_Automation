import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://www.orangehrm.com/en/contact-sales');
    await page.locator('//button[text()="Allow all"]').click();

    //page screenshot:
    // await page.screenshot({path: 'one.png'});
    // await page.screenshot({path: 'fullpage.png', fullPage: true});
    // await page.screenshot({path: './screenshots/mypic.png'});

    // await page.screenshot({
    //     path: './screenshots/random.png',
    //     clip: {x: 0, y: 0, width: 800, height: 600}
    // });

    //element screenshot:
    // let logoEle: Locator = page.getByAltText('OrangeHRM Logo').first();
    // await logoEle.screenshot({path: './screenshots/logo.png'});

    // let formEle: Locator = page.locator('#get-pricing-btn');
    // await formEle.screenshot({path: './screenshots/form.png'});

    //change format and quality:
    //by default PW saves in .png
    //want to save the screenshot in .jpg
    await page.screenshot({
        path: './screenshots/profilepic.jpg',
        type: 'jpeg',
        quality: 80, //0 to 100
        fullPage: false
    });

    //capture the screenshot and use as a Buffer - no need to save it.
    let imgBuffer: Buffer = await page.screenshot(); //cannot view or download - can attach it to reports
    console.log(imgBuffer.length);
    

    await page.waitForTimeout(2000);
    await page.close();
    await browser.close();

})();