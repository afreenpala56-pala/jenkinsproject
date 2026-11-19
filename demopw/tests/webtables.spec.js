import { test, expect } from '@playwright/test'

test("Web tables", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const col = await page.locator("//table[@id='productTable']/thead/tr/th");
    console.log("Total no of columns: ", await col.count());
    expect(await (col.count())).toBe(4);
    await page.waitForTimeout(3000);

    const row = await page.locator("//table[@id='productTable']/tbody/tr");
    console.log("Total no of Rows: ", await row.count());
    expect(await (row.count())).toBe(5);
    await page.waitForTimeout(3000);

    //To select particular row and check it
    //for example to select smartwatch
    /*const matchedrow = row.filter({
        has:page.locator('td'),
        hasText:'Smartwatch'
    })
    await matchedrow.locator('input').check();*/

    //we can use below method using function to reuse the code.
    await selectproduct(row, page, 'Laptop');
    await selectproduct(row, page, 'Smartwatch');
    await selectproduct(row, page, 'Tablet');

    //To print the details of all products
    for (let i = 0; i <= await row.count(); i++) {
        const rw = row.nth(i);
        const tds = rw.locator('td');
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }

    //to read all pages data
    const pages = await page.locator("//ul[@id='pagination']/li/a");
    console.log("Total no of pages: ", await pages.count());

    for (let p = 0; p < await pages.count(); p++){
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i <= await row.count(); i++) {
            const rw = row.nth(i);
            const tds = rw.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }

    await page.waitForTimeout(3000);
})

async function selectproduct(row, page, name) {
    const matchedrow = row.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedrow.locator('input').check();
}