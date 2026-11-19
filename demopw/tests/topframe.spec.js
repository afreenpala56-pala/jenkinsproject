import {test,expect} from '@playwright/test'

test('This is multiple frame example',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    //Frame-1
    //to find main top frame and left frame
    const leftframe = page.frameLocator("//frame[@name='frame-top']").frameLocator("//frame[@name='frame-left']");

    //to find text in left frame
    const leftText = await leftframe.locator('body').textContent();
    console.log("Left frame text is:",leftText);

    await page.waitForTimeout(3000);

    //Frame -2
    //to find bottom frame
    const bottomframe = page.frameLocator("//frame[@name='frame-bottom']");
    const bottomText= await bottomframe.locator('body').textContent();
    console.log("Bottom frame text is:",bottomText);

    await page.waitForTimeout(2000);

    //Assertions
    await expect(leftframe.locator('body')).toContainText('LEFT')
    await expect(bottomframe.locator('body')).toContainText('BOTTOM')

    await page.waitForTimeout(3000);
})