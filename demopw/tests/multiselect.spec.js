import {test,expect} from '@playwright/test'

//SELECT option is used when selct attribte is present in html 
//If slect is not present we can use xpath

test("Multi Select drop down",async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/formwidgets.html')

    await page.locator('#colors').selectOption(['Red','Yellow','Blue']);

    await page.waitForTimeout(5000);

    await page.selectOption('#colors',['Red','White']);

    //Asertions
    //Check no of elements are present or not - approach 1
    //const colors = await page.locator('#colors option');
    //await expect(colors).toHaveCount(5);

    //Check no fo elements using array $$ - approach 2
    const opt = await page.$$('#colors option');
    console.log(opt.length)
    await expect(opt).toHaveLength(opt.length);

    //Check the presence of value
    const content= await page.locator('#colors').textContent();
    await expect((content).includes('White')).toBeTruthy();

    await page.waitForTimeout(10000);
})