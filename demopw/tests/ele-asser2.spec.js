import{test,expect} from '@playwright/test';

test('Elemnet assertion',async({page})=>{

    await page.goto("https://playwrightlabs.com/practice/webelements.html");

    //7.await expect(locator).toHaveText()	Element matches text
    //7.await expect(locator).toContainText()	Element contain text
    const text1= await page.locator('//h1[@data-testid="page-title"]');
    await expect(text1).toHaveText('Web Elements Playground');
    await page.waitForTimeout(3000);

    //8.await expect(locator).toContainText()	Element contain text
    await expect(text1).toContainText('Playground');

    await page.waitForTimeout(3000);
    //9.await expect(locator).toHaveValue()	Input has a value
    const txt = await page.locator('#textbox1');
    await expect(txt).toHaveValue('Selenium WebDriver');

    await page.waitForTimeout(3000);

    //10.await expect(locator).toHaveCount()	List has exact number of children
    const cnt = await page.locator("//select[@id='drop1']/option");
    await expect(cnt).not.toHaveCount(4);
    await page.waitForTimeout(3000);


})