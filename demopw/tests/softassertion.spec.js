import {test,expect} from "@playwright/test";

test('Soft assertion', async({page}) =>{
    await page.goto('https://playwrightlabs.com/practice/webelements.html');

    await expect.soft(page).toHaveTitle('Web Elements Playground — Playwright Labs123');

    const elelogo= page.locator('.brand-logo');
    await expect(elelogo).toBeVisible();

})