import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://petdiseasealerts.org/forecast-map#/', {waitUntil: 'domcontentloaded'});
    await page.waitForTimeout(30000);

    let frameEle: FrameLocator = page.frameLocator(`iframe[id*='map-instance']`);
    let allStates: Locator[] = await frameEle.locator(`//*[name()='svg' and @id='map-svg']//*[name()='g' and @id='regions']/*[name()='g']`).all();
    console.log('Total number of regions: ' + allStates.length);

    //print the id of each region :
    for(let e of allStates) {

        let box = await e.boundingBox();
        if (box) {
            await page.mouse.move(box.x + box.width/2, box.y + box.height/2); //middle/centre of the bounding box of element
            await page.waitForTimeout(500);            
        }
        let stateName = await e.getAttribute('id');
        console.log(stateName);
    await page.waitForTimeout(200);
    }


    
    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();