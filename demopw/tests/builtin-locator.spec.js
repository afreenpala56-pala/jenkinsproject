import {test,expect} from '@playwright/test';

test('Placeholder', async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/login.html');

    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder("username").nth(0).fill('admin');

    await page.waitForTimeout(3000);

    await page.getByPlaceholder("password").fill('admin123');

    await page.waitForTimeout(3000);
    
    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    
    //await page.getByRole('button',{type:'submit'}).nth(0).click();

    //page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    await page.getByTestId('login-button');

    await page.waitForTimeout(3000);
    
})