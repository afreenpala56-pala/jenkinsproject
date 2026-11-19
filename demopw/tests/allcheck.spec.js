import {test,expect} from '@playwright/test'

test('All Checks',async({page})=>{
    await page.goto("https:/www.krninformatix.com/learn");

    const Checks = await page.$$("//input[@type='checkbox']");
    console.log(Checks.length);
    
    for(let check of Checks){
        await check.click();

    }

})