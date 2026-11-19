import {test,expect, chromium} from '@playwright/test'

//we can give test.skip in start also
test("Test skip",async({page, browserName})=>{
    console.log("This is test skip")
    if(browserName == chromium){
        test.skip();
    }
})

test("Test fixme",async({page, browserName})=>{
    console.log("This is test fixme");
    test.fixme();
})


test("Test fail",async({page, browserName})=>{
    test.fail();
    console.log("This is test fail");
    expect(1).toBe(2); // here if we give tobe as 1..test will pass but it will throw error like test passed "Expected to fail, but passed."
    
})


test("Test fail2",async({page, browserName})=>{
    console.log("This is test fail2")
    if(browserName == firefox){
        test.fail();
    }
    expect(1).toBe(2);
})

test("Test slow",async({page})=>{
    test.slow();
    await page.goto("https://playwrightlabs.com/practice/formwidgets.html");
})
    