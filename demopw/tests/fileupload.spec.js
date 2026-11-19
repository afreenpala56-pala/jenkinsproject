import {test,expect} from '@playwright/test'

test("this is file upload program",async({page})=>{
    await page.goto("https://playwrightlabs.com/practice/webelements.html")

    await page.locator('#uploadfile').setInputFiles('D:/Playwright/demopw/tests/uploadfiles/Playwright.pdf');

    await page.waitForTimeout(3000);

})

test.only("Multiple file upload",async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator("//input[@name='filesToUpload']").
    setInputFiles(['tests/uploadfiles/Playwright.pdf','tests/uploadfiles/playwright2.pdf']);

    await page.waitForTimeout(2000);
    
    //Assertions
    expect (await page.locator("#fileList li:nth-child(1)")).toHaveText('Playwright.pdf');
    expect (await page.locator("#fileList li:nth-child(2)")).toHaveText('playwright2.pdf');

    await page.waitForTimeout(3000);
    
    //To remove file
    await page.locator("//input[@name='filesToUpload']").setInputFiles([]);
    expect (await page.locator("#fileList li:nth-child(1)")).toHaveText('No Files Selected');
    

    await page.waitForTimeout(5000);
})