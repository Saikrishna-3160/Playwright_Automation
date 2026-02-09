import { Browser, chromium, expect, Locator, Page } from "@playwright/test"


(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');

    // await page.locator(`//*[contains(text(), 'preferred programming language')]`).click();
    // await page.getByText('PHP', {exact: true}).click();

    // await page.locator(`//*[contains(text(), 'preferred web framework')]`).click();
    // await page.getByText(`Angular`, {exact: true}).click();

    // await page.locator(`//*[contains(text(), 'experience level')]`).click();
    // await page.getByText(`Mid-level (4-6 years)`, {exact: true}).click();
    
    await selectLanguageDropdown(page, 'preferred programming language', 'PHP');
    await selectLanguageDropdown(page, 'preferred web framework', 'Angular');
    await selectLanguageDropdown(page, 'experience level', 'Mid-level (4-6 years)');

    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();

})();    

async function selectLanguageDropdown(page: Page, dropDownName: string, value: string) {
    await page.locator(`//*[contains(text(), '${dropDownName}')]`).click();
    //await language.click();
    await page.getByText(`${value}`, {exact: true}).click();
    //await expect(language).toHaveText(value);
}