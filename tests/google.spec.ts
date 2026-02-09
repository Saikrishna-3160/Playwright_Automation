//1. with test() block:

import { test, expect } from '@playwright/test';

test('check page title', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let title: string = await page.title();
    console.log(`page title : ${title}`);
    //expect(title).toBe('Google');
})

test('check page url', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let url: string = page.url();
    console.log(`page url : ${url}`);
    //expect(url).toBe('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
})

test('check page logo', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    expect(await page.getByTitle('naveenopencart').count()).toBe(1);
})

test('login flow', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('#input-email').fill('saikrishna');
    await page.locator('#input-password').fill('test#123');
    await page.getByText('LoginFail', {exact: true}).click();
})