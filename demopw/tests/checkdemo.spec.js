import {test,expect} from '@playwright/test';

test('Checkbox demo',async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/formwidgets.html')

    await page.locator('#sunday').click();
    await expect(page.locator('#sunday')).toBeChecked();

    await expect(page.locator('#monday')).not.toBeChecked();

    await page.waitForTimeout(3000);

    const checklocators=[
        "//input[@id='sunday']",
        "//input[@id='monday']",
        "//input[@id='friday']"]
    
    for(const loc of checklocators){
        await page.locator(loc).click();
    }

    await page.waitForTimeout(5000);
    for(const loc of checklocators){
        if(await page.locator(loc).isChecked){
            await page.locator(loc).uncheck();
        }
    }
    await page.waitForTimeout(5000);
})