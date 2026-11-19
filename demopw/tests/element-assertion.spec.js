import{test,expect} from '@playwright/test';

test('Elemnet assertion',async({page})=>{

    await page.goto("https://playwrightlabs.com/practice/webelements.html");

    //1.toHaveURL
    //2.toHaveTitle
    //3.await expect(locator).toBeVisible()	Element is visible
    const elelogo= page.locator('.brand-logo');
    await expect(elelogo).toBeVisible();

    await page.waitForTimeout(3000);

    //4.await expect(locator).toBeEnabled()	Element is enabled and Disabled
    const myButton= await page.locator('#myBtn');
    await expect(myButton).toBeEnabled();

    await page.waitForTimeout(3000);

    await page.locator('#tryItBtn').click();
    await page.waitForTimeout(2000);
    const button1= await page.locator('#myBtn');
    await expect(button1).toBeDisabled();

    await page.waitForTimeout(3000);
  
    //5.await expect(locator).toBeChecked()	Checkbox is checked -> only for radio and check boxes
    //radio
    const malerd= await page.locator('#radio1');
    malerd.click();

    await expect(malerd).toBeChecked();
    await page.waitForTimeout(3000);

    //checkbox
    const checkbox = await page.locator('#checkbox1');
    await expect(checkbox).toBeChecked();
    checkbox.click();
    await page.waitForTimeout(3000);

    const checkboxa = await page.locator('#checkbox1');
    await expect(checkboxa).not.toBeChecked();

    await page.waitForTimeout(3000);

    //6.await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const dropbtn = await page.locator('#dropdownBtn');
    await expect(dropbtn).toHaveAttribute('data-testid','delayed-dropdown-button');
    await page.waitForTimeout(3000);

})