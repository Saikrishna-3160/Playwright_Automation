import { Browser, chromium, type Locator, type Page } from "@playwright/test";


//id - always unique attribute (NA in PW)
//id --> css selector: #id = #input-email

//if id is not available:
//html tag[attr='value'] == input[value='Login']

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });
    
    const page: Page = await browser.newPage();
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // //find the element using locator
    // let emailId: Locator = page.locator('#input-email');
    // let password: Locator = page.locator('#input-password');
    // let loginBtn: Locator = page.locator('input[value="Login"]');

    // //perform the action
    // await emailId.fill('sktest786@test.com');
    // await password.fill('Krishna#123');
    // await loginBtn.click();

    // //6 elements -- same text: 'MY Account' --> nth: 3rd ele -> (2)
    // //let header: string | null = await page.getByText('My Account').first().textContent();
    
    // //using xpath:
    // let header: string | null = await page.locator('//h2[text()="My Account"]').textContent();
    // console.log(header);
    
    //using element Placeholder value:
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').fill('testing');
    await page.getByPlaceholder('Telephone').fill('9887676565');

    //highlight - debugging:
    //await page.locator('#input-firstname').highlight();

    //enter value with a delay: char by char like a real user --> search feature
    await page.locator('#input-lastname').pressSequentially('Automation Testing', {delay: 500});


    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})();