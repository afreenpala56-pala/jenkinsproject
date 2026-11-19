import{test,expect} from '@playwright/test';

//create test block
test('This is login test',async({page})=>{
    //to navigate to specific url
    await page.goto('https://www.saucedemo.com/');

    // to pause the execution
    await page.waitForTimeout(3000);

    //await page.locator('id=user-name').fill('standard_user');
    await page.locator('id=user-name','standard_user');

    await page.waitForTimeout(3000);

    await page.locator('id=password').fill('secret_sauce')

    await page.waitForTimeout(3000);

    //await page.locator('id=login-button').click();
    await page.click('id=login-button')

    await page.waitForTimeout(3000);

})