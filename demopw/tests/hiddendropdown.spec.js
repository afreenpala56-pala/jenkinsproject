import {test,expect} from '@playwright/test'

test('Hidden drop down',async({page})=>{
    await page.goto('https://www.air.irctc.co.in/');

    await page.locator('//input[@id="stationFrom"]').fill("Ben");

    const alllist = await page.$$("//li[@class='ui-menu-item']/div");
    console.log(alllist.length);
    
    for(let option of alllist){
        const text = await option.textContent();
        console.log(text);
    }

    await page.waitForTimeout(3000);

})


