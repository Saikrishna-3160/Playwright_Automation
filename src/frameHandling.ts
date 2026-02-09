import { Browser, chromium, expect, FrameLocator, Locator, Page } from "@playwright/test";
import { ElementUtil } from '../utils/elementUtils.spec.js';


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    // await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    // await page.getByTitle('Vehicle-Registration-Forms-and-Examples', {exact: true}).click();

    //iframe will be loaded
    // let frameEle: FrameLocator = await page.frameLocator('iframe[id*="frame-one"]');
    // await frameEle.locator('#RESULT_TextField-1').fill('Automation Test');

    // let header = await page.locator(`h3.details__form-preview-title`).innerText();
    // await console.log(header);
    
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let frameEle: FrameLocator = page.frameLocator(`[name='main']`);
    let header = await frameEle.locator('h2').innerText();
    console.log(header);

    //print total no. of frames
    let allFrames: Locator[] = await page.locator('//frame').all();
    console.log("total number of frames: " + allFrames.length);
    
    for(let Ele of allFrames){
        console.log(await Ele.getAttribute('name'), ":", await Ele.getAttribute('src'));
    }


    await page.waitForTimeout(6000);
    await page.close();
    await browser.close();

})();    