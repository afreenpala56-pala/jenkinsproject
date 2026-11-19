import{test,expect} from '@playwright/test';

test('Url check',async({page})=>{

    await page.goto('https://playwrightlabs.com/practice/login.html');

    //Title assertion = Page has a URL
    await expect(page).toHaveTitle('Practice Login — Playwright Labs');

    await page.waitForTimeout(3000);

    await page.locator('#username').fill('admin');

    await page.locator('#password').fill('admin123');

    await page.locator('#login-button').click();

    await page.waitForTimeout(3000);

    //URL assertion = Page has a title
    await expect(page).toHaveURL('https://playwrightlabs.com/practice/dashboard.html');

    await page.waitForTimeout(3000);

})