import { test, expect, Page, Locator} from '@playwright/test'

test('single selection checkbox', async ({page}) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while (true) {
        let isEeleExist = await page.locator(`//tr[.//td[normalize-space()='Hong Kong']]//input[@type='checkbox']`).isVisible();
        if (isEeleExist){
            console.log('element is found..');
            await page.locator(`//tr[.//td[normalize-space()='Hong Kong']]//input[@type='checkbox']`).click();
            break;
        }
        //clcik on next icon: pagination logic:
        let next = page.getByRole('link', { name: 'Next' });
        await next.click();
        await page.waitForTimeout(2000);
        if(await next.isDisabled()){
            console.log('pagination is over...');
            break;            
        }
    }
    
    //await page.pause();

    // let count = 0;
    // while (true){
    //     let ele: Locator = page.locator('#btn');
    //     ele.click({clickCount: count++})
    //     if ( await ele.isEnabled()){
    //         console.log('ele is found');
    //         break;         
    //     }
    // }
        
})

test('multiple selection', async ({page}) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while (true) {
        let allEles = await page.locator(`//td[text()="India"]/preceding-sibling::td/input[@type="checkbox"]`).all();
        //let allRussiaEles = await page.locator(`//tr[.//td[normalize-space()='Russia']]//input[@type='checkbox']`).all();
        for(let e of allEles){
            await e.click();         
        }
            
        //click on the pagination until over
        let nextBtn = page.getByRole('link', { name: 'Next' });
        await page.waitForTimeout(1000);
        if(await nextBtn.isDisabled()){
              break;
        }
        await nextBtn.click();
        
    }

    await page.waitForTimeout(10000);
})    