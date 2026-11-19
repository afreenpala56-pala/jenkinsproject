import {test,expect} from '@playwright/test'

test('Screenshot login by making changes in config', async({page})=>{
    await page.goto("https://playwrightlabs.com/practice/login.html");

    await page.locator('#username').fill('admin');

    await page.locator('#password').fill('admin123');

    await page.locator('#login-button').click();

    await page.waitForTimeout(2000);

})