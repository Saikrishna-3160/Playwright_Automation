import {test, Locator, Page} from '@playwright/test';

test('single selection', async ({page}) => {
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');

    await page.locator('#datepicker').click();

    let currentMonthYear = page.locator(`.ui-datepicker-month`).textContent() + ' ' + page.locator(`.ui-datepicker-year`).textContent(); 
    console.log(currentMonthYear);
    
    // let currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent();
    // console.log(currentMonthYear); //January 2026

    let expectedMonthYear = 'December 2027';
    while(true){
        if(currentMonthYear === expectedMonthYear) {
            await page.getByText('6', {exact: true}).click();
            break;
        }
        //click on next icon: go to the next month:
        await page.locator(`span:has-text("Next")`).click();
        currentMonthYear = await page.locator(`.ui-datepicker-month`).textContent() + ' ' + await page.locator(`.ui-datepicker-year`).textContent();
        console.log(currentMonthYear);
    }

    await page.waitForTimeout(5000);

    
})