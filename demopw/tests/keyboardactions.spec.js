import {test,expect} from '@playwright/test'

test("This is Keyboard actions", async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/webelements.html');

    const txt2=await page.locator('#ta2');
    await txt2.click();

    //ctrl+a
    await page.keyboard.press('Control+A');

    //ctrl+c
    await page.keyboard.press('Control+C');

    //shift + tab
    await page.keyboard.press('Shift+Tab');

    //ctrl+V
    await page.keyboard.press('Control+v')

    //tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    
    await page.waitForTimeout(3000);
})