 //use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    //screenshot: 'on',
    //video: 'on',
//} 


import {test,expect} from '@playwright/test'

test('Screenshot login by making changes in config', async({page})=>{
    await page.goto("https://playwrightlabs.com/practice/login.html");

    await page.locator('#username').fill('admin');

    await page.locator('#password').fill('admin123');

    await page.locator('#login-button').click();

    await page.waitForTimeout(2000);

})
