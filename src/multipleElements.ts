import { Browser, chromium, Locator, Page } from "@playwright/test";


//IIFE
(async () => {
    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/logon');

    let rightPanelLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinks.length);
    console.log(rightPanelLinks);

    //for of.. loop
    for (let e of rightPanelLinks) {
        console.log(e); 
        if(e === 'Forgotten Password'){
            await page.getByText(e).first().click();
            break;
        } 
    }

    console.log("-----------------");

    for (let i = 0; i < rightPanelLinks.length; i++) {
        console.log(rightPanelLinks[i]);
        
    }

    console.log("-----------------");

    //capture all the footer links:
    let footerlinks: Locator[] = await page.locator('footer a').all();
    console.log(footerlinks.length);
    
    let allFooterLinks = []; //0
    for (let e of footerlinks) {
        // console.log(await e.innerText());
        // console.log(await e.getAttribute('href'));
        let linkText: string = await e.innerText();
        allFooterLinks.push(linkText);
    }

    console.log(allFooterLinks.length);
    console.log(allFooterLinks);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
    
})();