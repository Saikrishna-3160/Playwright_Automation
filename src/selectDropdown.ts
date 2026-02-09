import { Browser, chromium, expect, Locator, Page } from "@playwright/test"


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    let day: Locator = page.locator('#day');
    let month: Locator = page.locator('#month');
    let year: Locator = page.locator('#year');

    //select by value attributes: 1
    // await day.selectOption('5');
    // await month.selectOption('10');
    // await year.selectOption('2020');

    // await page.waitForTimeout(3000);

    // //select by visible text(label): 2

    // await day.selectOption({label: '15'});
    // await month.selectOption({label: 'Jun'});
    // await year.selectOption({label: '2010'});

    // page.waitForTimeout(3000);

    // //select by index:3 (index starts from 0)
    // await day.selectOption({ index: 5 });
    // await month.selectOption({ index: 11 });
    // await year.selectOption({ index: 28 }); 

    await page.waitForTimeout(3000);

    await selectDropDownByValue(day, '6');
    await selectDropDownByValue(month, '12');
    await selectDropDownByValue(year, '1998');

    await page.waitForTimeout(3000);

    await selectDropDownByLabel(day, '21');
    await selectDropDownByLabel(month, 'May');
    await selectDropDownByLabel(year, '2002');

    await page.waitForTimeout(3000);

    await selectDropDownByIndex(day, 12);
    await selectDropDownByIndex(month, 7);
    await selectDropDownByIndex(year, 33);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();  

})();

async function selectDropDownByValue(element: Locator, value: string): Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
    
}

async function selectDropDownByLabel(element:Locator, labelValue: string): Promise<void> {
    await element.selectOption({label: labelValue});
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}

async function selectDropDownByIndex(element:Locator, indexValue: number): Promise<void> {
    await element.selectOption({index: indexValue});
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}
    