import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page: Page = await browser.newPage();

    //Add one event listener at the page level. running in background - keep checking do we get any JS popup.
    //if any pop up is coming - dismiss it immediately.

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Sai krishna'); //accept the alert - click on OK
        //await dialog.dismiss(); //dismiss the alert -- click on cancel
        console.log(dialog.type());
        console.log("=====================");    
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByText('Click for JS Alert').click();
    await page.getByText('Click for JS Alert').click();
    await page.getByText('Click for JS Alert').click();

    //Turning off the event listener
    page.off('dialog', async dialog => {   })

    //1. Alert : alert('message') -- OK
    //2. Confirm: confirm('are you sure?') -- OK and Cancel
    //3. Prompt: prompt('enter username') -- only one text field with ok/cancel

    await page.close();
    await browser.close();

})();