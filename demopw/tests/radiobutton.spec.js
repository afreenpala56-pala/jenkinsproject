import {test,expect} from '@playwright/test';

test('Input textbox',async({page})=>{

    await page.goto('https://playwrightlabs.com/practice/formwidgets.html');
    
    await page.locator('#female').click();
    await expect(page.locator("#female")).toBeChecked();

    await expect(page.locator("#female").isChecked()).toBeTruthy();

    await page.waitForTimeout(3000);
})