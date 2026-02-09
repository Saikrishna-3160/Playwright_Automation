import {test, expect, Locator} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';


//schema
type RegData = {
    firstName: string,
    lastName: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

let fileContent = fs.readFileSync('./data/register.csv', 'utf-8');
let registrationData: RegData[] = parse ((fileContent), {
    columns: true,
    skip_empty_lines: true
})

for(let user of registrationData){
    test(`Registration test for ${user.firstName}`, async ({page}) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(getRandomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephone);
        await page.locator('#input-password').fill(user.password);
        await page.locator('#input-confirm').fill(user.password);
        let radioBtnYes: Locator = page.getByRole('radio', { name: 'Yes', checked: false });
    
        if(user.subscribeNewsletter === 'Yes'){
            await radioBtnYes.check();
        }

        await page.locator(`[name='agree']`).click();
        await page.getByRole('button', {name: 'Continue'}).click();

        await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();
    })
    
}

function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}