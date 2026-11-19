import {test,expect} from '@playwright/test'

test('Single frame',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');

    await page.click('//a[@href="#Single"]')

    //find all frames
    const frames = page.frames();
    //find the target frame
    const targetframe= frames.find(frames=>frames.url().includes('SingleFrame'));
    //use the frame
    await targetframe.locator('//input[@type="text"]').fill('Hello Playwright');

    await page.waitForTimeout(3000);

    //Assertion
    await expect(targetframe.locator('//input[@type="text"]')).toHaveValue('Hello Playwright')

    await page.waitForTimeout(3000);
})

