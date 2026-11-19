import {test,expect} from '@playwright/test'

test.skip('Alert pop up',async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/webelements.html');

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Hello');
        await dialog.accept();

    })
    await page.waitForTimeout(3000);
    await page.locator('#alert1').click();
    await page.waitForTimeout(3000);

})

test.skip('Conformation pop up',async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/webelements.html');

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press OK to confirm');
        await page.waitForTimeout(3000);
        await dialog.dismiss();
    })
    
    await page.locator('#confirm').click();
    await page.waitForTimeout(3000);
})

test("Prompt pop up", async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/webelements.html');
     
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('What is your name?');
        await page.waitForTimeout(3000);
        await dialog.accept('Annu');
        
    })
    await page.waitForTimeout(3000);
    
    await page.locator("#prompt").click();
    await page.waitForTimeout(3000);
})