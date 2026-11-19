import {test,expect} from '@playwright/test';

test('This is login page', async({page})=>{
    //To navigate login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.waitForTimeout(3000);

    await page.locator('//input[@name="username"]').fill('admin');

    await page.waitForTimeout(3000);

    await page.locator('//input[@type="password"]').fill('admin123');

    await page.waitForTimeout(3000);

    await page.locator('//button[@type="submit"]').click();

    await page.waitForTimeout(3000);

    const dashElement = await page.locator('//h6[text()="Dashboard"]');

    await page.waitForTimeout(3000);

})