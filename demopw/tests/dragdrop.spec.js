import {test, expect } from "@playwright/test";

test("Drag and Drop",async({page})=>{
    await page.goto("https://playwrightlabs.com/practice/testpages/drag-drop.html");

    const apple = await page.getByTestId("drag-item-apple");
    const drop = await page.locator("#basket-dropzone");

    /*Approach-1
    await apple.dragTo(drop);
    console.log(await drop.textContent());
    await expect(drop).toHaveText("🍎 Apple");*/

    /*Appraoch - 2
    await apple.hover();
    await page.mouse.up();

    await drop.hover();
    await page.mouse.down();*/


    const grape= await page.locator('//div[@data-item="grapes"]');
    await grape.dragTo(drop);


    await page.waitForTimeout(3000);

})

