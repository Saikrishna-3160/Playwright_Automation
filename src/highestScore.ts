import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://www.espncricinfo.com/series/icc-women-s-world-cup-2025-26-1478193/new-zealand-women-vs-south-africa-women-7th-match-1490419/full-scorecard');

    let allScores: string[] = await page.locator(`(//span[text()='New Zealand Women'])[2]/parent::span/parent::div/parent::div/following-sibling::div/descendant::tbody[1]/child::tr/child::td[3]`).allInnerTexts();
    console.log(allScores);

    let allScoreVal: number[] = [];

    for (let i = 0; i < allScores.length-2; i++) {
            allScoreVal.push((Number)(allScores[i]));
    }

    console.log(allScoreVal);
    allScoreVal.sort();
    console.log(allScoreVal);

    console.log('highest score: ' + allScoreVal[allScoreVal.length-1]);   


    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();


//(//span[text()='New Zealand Women'])[2]/parent::span/parent::div/parent::div/following-sibling::div/descendant::tbody[1]/child::tr/child::td[3]