import {test,expect} from '@playwright/test'

test('Select Drop Down',async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/formwidgets.html');

    //selecting using label/visible text
    await page.locator('#country').selectOption({label:'France'});

    await page.waitForTimeout(3000);

    await page.locator('#country').selectOption('India');
    await page.waitForTimeout(3000);

    //selecting using value
    await page.locator('#country').selectOption({value:'uk'})
    await page.waitForTimeout(3000);

    //selecting using index
    await page.locator('#country').selectOption({index:0})

    await page.waitForTimeout(3000);

    //assertions
    //check the no of options - appraoch 1
    //const options= await page.locator('#country option');
    //await expect(options).toHaveCount(10);

    //check no of options - approach 2
    const options= await page.$$('#country option');
    console.log("Number of options:",+options.length);
    await expect(options.length).toBe(10);


    //to Verify/presence of value approach -1
    const content= await page.locator('#country').textContent();
    console.log(content);
    await expect(content.includes('India')).toBeTruthy();

    //to Verify/presence of value approach -2
    const opts= await page.$$('#country option');
    let status =false;
    for(const option of opts){
        console.log(await option.textContent());
        let value= await option.textContent();
        if(value.includes("India")){
            status=true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    await page.waitForTimeout(5000);
})