import {test,expect} from '@playwright/test'

test("This is example of Date picking",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#datepicker').fill('25/10/2026');

    //Date Picker
    const year = "2026";
    const month = "October";
    const date = "24";

    await page.locator('#datepicker').click();

    while(true){
        const currentyear= await page.locator('.ui-datepicker-year').textContent();
        const currentmonth = await page.locator('.ui-datepicker-month').textContent();

        if(month == currentmonth && year== currentyear){
            break;
        }

        else{
            await page.click("//a[@title='Next']");
        }
    }

    const dates=await page.$$("//a[contains(@class,'ui-state-default')]")
    /*for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }*/

    //instead of for loop we can use dynamic path of date and directly click the date
    //await page.click('//a[contains(@class,"ui-state-default")][text()="25"]');

    //instead of using date directly we can take variable date and get vale from there for the above line
    //always use backticks for this 
    await page.click(`//a[contains(@class,"ui-state-default")][text()="${date}"]`);
    

    await page.waitForTimeout(3000);

})