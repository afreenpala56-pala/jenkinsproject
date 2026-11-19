import {test,expect} from '@playwright/test'

test("Test 1 @sanity",async({page})=>{
    console.log("This is test 1.......")
})
test("Test 2 @sanity",async({page})=>{
    console.log("This is test 2.......")
})
test("Test 3 @reg",async({page})=>{
    console.log("This is test 3.......")
})
test("Test 4 @reg",async({page})=>{
    console.log("This is test 4.......")
})
test("Test 5 @sanity",async({page})=>{
    console.log("This is test 5.......")
})




//npx playwright test tagging.spec.js --project=chromium --grep "@sanity"
//npx playwright test tagging.spec.js --project=chromium --grep "@sanity" --grep-invert "@reg"