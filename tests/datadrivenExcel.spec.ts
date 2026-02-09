import {test, expect}from '@playwright/test';
import XLSX from 'xlsx';

const workbook = XLSX.readFile('./data/userRegister.xlsx');
const sheet = workbook.Sheets['Register'];
const users = XLSX.utils.sheet_to_json(sheet);

for(let [index, user] of users.entries()){

    //map the user object with JSON values:
    let {firstName, lastName, telephone, password} = user as any;
    test(`Registration test for the user# ${index+1}: ${firstName}`, async ({ page }) => {
    
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(getrandomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(telephone.toString());
        await page.locator('#input-password').fill(password);
        await page.locator('#input-confirm').fill(password);
        await page.getByRole('radio', { name: 'Yes', checked: false }).click();

        await page.locator(`[name='agree']`).click();
        //await page.waitForTimeout(5000);
        await page.getByRole('button', {name: 'Continue'}).click();

        await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();
    });
}

function getrandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}