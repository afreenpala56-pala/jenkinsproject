import {test,expect} from '@playwright/test'

test('Right click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const rightclk= await page.locator("//span[text()='right click me']");

    //Right click
    await rightclk.click({button: 'right'});

    await page.waitForTimeout(3000);

})