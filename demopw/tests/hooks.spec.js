import {test,expect} from '@playwright/test'

let page;

test.beforeAll('Login to page',async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    await page.locator('//input[@id="login-button"]').click();

})

test.afterAll("logout page",async({browser})=>{
    await page.locator('//button[text()="Open Menu"]').click();
    await page.locator('//a[text()="Logout"]').click();
    await page.waitForTimeout(5000);
})


test("Login",async()=>{
    const products = await page.locator('//div[@data-test="inventory-item-description"]');
    expect(products).toHaveCount(6);

    await page.waitForTimeout(3000);
})


test("Add to cart",async()=>{

    //await page.locator('//div[text()="Sauce Labs Backpack"]').click();
    await page.locator('//button[@name="add-to-cart-sauce-labs-backpack"]').click();

    await page.waitForTimeout(5000);
})

