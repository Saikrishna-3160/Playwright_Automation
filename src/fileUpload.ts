import { Browser, chromium, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch({headless:false, channel: 'chrome'});
    let page: Page = await browser.newPage();
    //await page.goto('https://practice.expandtesting.com/upload'); //Upload single file

    // //type='file' attribute should be present for that button
    // //attach the file:
    // await page.getByTestId('file-input').setInputFiles(`D:/documents/Test Docs/XLS/Testing_data_20.xlsx`);
    // //upload the file:
    // await page.getByTestId('file-submit').click();

    // //type='file' must be there
    // //make sure multiple attribute is there
    // await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php'); //Upload multiple files
    // await page.locator('#filesToUpload').setInputFiles([
    //     `D:/documents/Test Docs/XLS/Testing_data_20.xlsx`,
    //     `D:/documents/Test Docs/XLS/5646573.pdf`,
    //     `D:/documents/Test Docs/XLS/Motor test2.xlsx`,
    //     `D:/documents/Test Docs/XLS/test data.32.25.xlsx`
    // ]);

    // //you can create file/s dynamically without having them in ur workspace or in ur local machine.
    // //it is useful for test cases where you dont want to maintain the files..
    // await page.goto('https://practice.expandtesting.com/upload'); //upload single file
    // await page.locator('#fileInput').setInputFiles([{
    //     name: 'resume.pdf',
    //     mimeType: 'text/pdf',
    //     buffer: Buffer.from(`Sai krishna resume for test automation, Sider helps you quickly understand your 
    //         PDF documents by creating concise summaries, saving you time and highlighting key points. Perfect
    //          for anyone needing to digest information quickly. Translate your PDF documents with our 
    //          AI-powered tool. Upload your files and receive accurate translations in your desired language 
    //          while preserving the original format. Ideal for business communications, travel documents, or 
    //          studying foreign languages, making global interaction more accessible.`)
    // }]);
    // //upload the file:
    // await page.getByTestId('file-submit').click();

    //multiple files upload - on the fly:
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php'); //upload multiple files
    await page.locator('#filesToUpload').setInputFiles([{
        name: 'PDF_Resume.pdf',
        mimeType: 'text/pdf',
        buffer: Buffer.from(`Sai krishna resume for test automation, Sider helps you quickly understand your 
            PDF documents by creating concise summaries, saving you time and highlighting key points. Perfect
             for anyone needing to digest information quickly. Translate your PDF documents with our 
             AI-powered tool. Upload your files and receive accurate translations in your desired language 
             while preserving the original format. Ideal for business communications, travel documents, or 
             studying foreign languages, making global interaction more accessible.`
        )},
        {
        name: 'AI_sider.txt',
        mimeType: 'text/txt',
        buffer: Buffer.from(`Sai krishna resume for test automation, Sider helps you quickly understand your 
            PDF documents by creating concise summaries, saving you time and highlighting key points. Perfect
             for anyone needing to digest information quickly. Translate your PDF documents with our 
             AI-powered tool. Upload your files and receive accurate translations in your desired language 
             while preserving the original format. Ideal for business communications, travel documents, or 
             studying foreign languages, making global interaction more accessible.`
        )},
        {
        name: 'Shahrukhkhan.png',
        mimeType: 'image/png',
        buffer: Buffer.from(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9C8VCVM5RO2Wf31c3zOHjC_
            weKT815bRGCjf6KfFyH42a9TDigGyMua7MBpTtQTODH_sSIFGIniKSbzFQt-UPsEF0RCccT9p0OK7DguVV&s=10`
        )}]);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})();