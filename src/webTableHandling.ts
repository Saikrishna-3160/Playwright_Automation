import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    //await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    await page.goto("https://www.espncricinfo.com/series/men-s-t20-asia-cup-2025-1496919/india-vs-pakistan-final-1496938/full-scorecard");

    // await selectUser(page, 'Joe.Root');
    // await selectUser(page, 'John.Smith');

    //await selectUserWithCss(page, 'Joe.Root');
    //await selectUserWithCss(page, 'John.Smith');

    //await selectAllchkbx(page);

    //get all the column data values:
    // let userData: string[] = await page.locator(`//td[text()="John.Smith"]/following-sibling::td`).allInnerTexts();
    // console.log(userData);

    // let johnData = await getUserData(page, 'John.Smith');
    // console.log(johnData);    

    //cricinfo
    ////a[@title='Abhishek Sharma']/ancestor::td/following-sibling::td/span/span
    let wicketerName = await wicketBowler(page, "Abhishek Sharma");
    console.log(wicketerName);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();

async function selectUser(page: Page, username: string): Promise<void> {
    await page.locator(`//td[text()="${username}"]/preceding-sibling::td/input[@type="checkbox"]`).click();
}

async function selectUserWithCss(page:Page, username: string): Promise<void> {
    await page.locator(`tr:has(td:text("${username}"))`).locator('td').first().click();
}

//check all elements one by one and uncheck sequentially
async function selectAllchkbx(page: Page): Promise<void> {
    let checkbox: Locator[] = await page.locator('//input[@name="chkSelectRow[]"]').all();
    for (let i = 0; i < checkbox.length; i++) {
        let element = checkbox[i];
        await element.check();
    }

    for (let i = 0; i < checkbox.length; i++) {
        let element = checkbox[i];
        await element.uncheck();
    }
}

async function getUserData(page: Page, username: string): Promise<string[]> {
    return await page.locator(`//td[text()="${username}"]/following-sibling::td`).allInnerTexts();    
}

async function wicketBowler(page: Page, username: string): Promise<string[]> {
    return await page.locator(`//a[@title="${username}"]/ancestor::td/following-sibling::td/span/span`).allInnerTexts();
}