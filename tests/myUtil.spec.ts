import {test, expect} from '@playwright/test';
import { ElementUtil } from '../utils/elementUtils.spec.js';

test('has title', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let eleUtil = new ElementUtil(page, 10000);
    await eleUtil.type(`//input[@id="input-email"]`, 'test56@gmail.com');
    await eleUtil.type(page.getByRole('textbox', {name: 'Password'}), 'test@123');
    await eleUtil.click(`input[type="submit"][value="Login"]`);

    await page.waitForTimeout(3000);
    await page.close();

})