import {test,expect} from '@playwright/test'

test('All links',async({page})=>{
    await page.goto("https:/www.krninformatix.com/learn");

    const links = await page.$$('//a');
    console.log(links.length);
    
    for(let link of links){
        const lk = await link.textContent();
        console.log(lk);

    }

})