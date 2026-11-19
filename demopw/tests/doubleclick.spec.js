import {test,expect} from '@playwright/test'

test('Double click',async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/formwidgets.html')

    const btncopy= await page.locator('#copyBtn');

    await btncopy.dblclick();

    await page.waitForTimeout(2000);
    
    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(4000);

})