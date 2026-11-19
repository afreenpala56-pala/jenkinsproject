import {test,expect} from '@playwright/test';

test('Builtin Locators', async({page})=>{
    await page.goto('https://playwright.dev/');

    await page.waitForTimeout(3000);
    
    //page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText("Playwright logo");

    await expect(logo).toBeVisible();

    await page.waitForTimeout(3000);

    //page.getByText() to locate by text content.
    const text = await page.getByText("Playwright Test");

    await expect(text).toBeVisible();

})