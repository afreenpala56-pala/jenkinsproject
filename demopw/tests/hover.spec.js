import {test,expect} from '@playwright/test'

test('This is example of hover',async({page})=>{
    await page.goto('https://www.krninformatix.com/');

    const courseoffered = await page.locator("//a[text()='Courses Offered']");
    const softwarecourse = await page.locator("//a[text()='Software Testing']");

    await courseoffered.hover();
    await page.waitForTimeout(3000);
    await softwarecourse.hover();
    await page.waitForTimeout(3000);
})