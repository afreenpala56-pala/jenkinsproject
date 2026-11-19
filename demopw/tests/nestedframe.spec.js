import {test,expect} from '@playwright/test'

test('Single frame',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');

    //To print no of iframes in a page
    console.log(await page.frames().length);

    await page.click("//a[@href='#Multiple']");
    
    await page
        .frameLocator('//iframe[@src="MultipleFrames.html"]')
        .frameLocator('//iframe[@src="SingleFrame.html"]')
        .locator('//input[@type="text"]')
        .fill("Hello Annu");

    await page.waitForTimeout(3000);
})

