import {test,expect} from '@playwright/test';

test('Input textbox',async({page})=>{

    await page.goto('https://playwrightlabs.com/practice/formwidgets.html');
    
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator("#name")).toBeEditable();
    await expect(page.locator('#name')).toBeEnabled();
    await expect(page.locator('#name')).toBeEmpty();
    await page.waitForTimeout(3000);

    await page.locator('#name').fill("ANNU");
    await page.waitForTimeout(3000);

})