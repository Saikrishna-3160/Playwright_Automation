import {test, expect, Locator} from '@playwright/test';
import fs from 'fs';

test('demo test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');

    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('link', {name: 'a.pdf'}).nth(0).click();

    const download = await downloadPromise;

    const filename = download.suggestedFilename();
    console.log('Downloaded file: ' + filename);

    //save the file to a location:
    const path = './downloads/' + filename;
    await download.saveAs(path);

    //verify that file exists or not
    expect(fs.existsSync(path)).toBeTruthy();
})