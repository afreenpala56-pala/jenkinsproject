import {test,expect} from '@playwright/test'

test('Single frame',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.locator("//a[@href='#Single']").click();

    await page.frameLocator("//iframe[@id='singleframe']").locator("//input[@type='text']").nth(0).fill('Love u Annu');

    await page.waitForTimeout(5000);

    const value = await page.frameLocator("//iframe[@id='singleframe']").locator("//input[@type='text']").inputValue();
    console.log("Value inside the frame:", value);
    expect(value).toBe('Love u Annu')

    await page.waitForTimeout(3000);
})