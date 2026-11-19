import {test,expect} from '@playwright/test'

test.only("Screenshot",async({page})=>{
    await page.goto("https://playwrightlabs.com/");

    await page.screenshot({path:'tests/screenshot/'+Date.now()+'screen.png'});

    await page.waitForTimeout(3000);
})

test("Screenshot2",async({page})=>{
    await page.goto("https://playwrightlabs.com/practice/webelements.html");
    await page.waitForTimeout(5000);

    await page.screenshot({path:'tests/screenshot/'+Date.now()+'screen2.png',fullPage:true});

    await page.waitForTimeout(3000);
})