import {test,expect} from '@playwright/test'

test('Single frame',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.locator("//a[@href='#Single']").click();

    const frame = await page.frame({name:'SingleFrame'});
    //const frame = await page.frame({URL:'https://demo.automationtesting.in/SingleFrame.html'});
    expect(frame).not.toBeNull();

    await page.waitForTimeout(3000);
    const input = frame.locator("//input[@type='text']")
    await input.fill("Hello Annu");

    await expect(input).toHaveValue('Hello Annu');

    //To print no of iframes in a page
    console.log(await page.frames().length);

    await page.waitForTimeout(3000);
})