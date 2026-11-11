import { test,expect } from '@playwright/test' 
//import path from 'node:path'

test("basic form", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //start parc button
    await page.locator("//a[contains(text(),'Start practising ↓')]").click()
    //basic form elemet is visible or not
    await expect(page.locator("//h2[normalize-space()='Section 1: Basic Form Elements']")).toBeVisible()
    // enter ur name
    await page.fill("//input[@id='text-input']",'tetsing123')
    // passwaord
    await page.getByTestId('password-input').fill("ranjith@1234")
    //email
    await page.fill("//input[@id='email-input']","abcd@gmail.com")
    //phone
    await page.getByPlaceholder("Enter phone").fill("7854961235")
    //text area
    await page.fill("//textarea[@id='textarea-input']","testing playwright")
    //not submited text is visible
    await expect(page.locator("//p[normalize-space()='Not submitted']")).toBeVisible()
    //submit button
    await page.getByRole("button", { name: "Submit form", exact: true }).click()
    //after submit 
    await expect(page.locator("//p[normalize-space()='Form submitted successfully']")).toBeVisible()
    //reset
    await page.locator("//button[@id='form-reset']").click()
    //reset text
    await expect(page.locator("//p[normalize-space()='Form was reset']")).toBeVisible()

})

test("button", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //section 2
    await expect(page.locator("//h2[normalize-space()='Section 2: Button Interactions']")).toBeVisible()
    //no click
    await expect(page.locator("//p[normalize-space()='No click yet']")).toBeVisible()
    //single click
    await page.locator("//button[@id='single-click-btn']").click()
    //singlr clicked text
    await expect(page.locator("//p[normalize-space()='Single clicked!']")).toBeVisible()
    //no db click
    await expect(page.locator("//p[normalize-space()='Not double-clicked']")).toBeVisible()
    //db click
    await page.locator("//button[@id='double-click-btn']").dblclick()
    //db clicked text
    await expect(page.locator("//p[normalize-space()='Double clicked!']")).toBeVisible()
    //no right click
    await expect(page.locator("//p[normalize-space()='Not right-clicked']")).toBeVisible()
    //right click
    await page.locator("//button[@id='right-click-btn']").click({button:'right'})
    //right clicked text
    await expect(page.locator("//p[normalize-space()='Right click captured (context menu blocked)']")).toBeVisible()
    //always btn visible
    await expect(page.locator("//button[@id='disabled-btn']")).toBeVisible()
    //start 3 sec btn
    await page.locator("//button[@id='start-delay-btn']").click()
    //enable after 3 sec
    await expect(page.locator("//button[@id='delayed-enable-btn']")).toBeVisible()
    // now enabled vis
    await expect(page.locator("//*[text()='Now Enabled']")).toBeVisible()
    //click on now
    await page.locator("//*[text()='Now Enabled']").click()
    //org lable
    await page.locator("//button[@id='relabel-btn']").click()
    //org lable to clicked lable
    await page.locator("//*[text()='Clicked Label']").click()
    //back to org
    await expect(page.locator("//button[@id='relabel-btn']")).toBeVisible()
})

test("checkbox/radio", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //start parc button
    await page.locator("//a[contains(text(),'Start practising ↓')]").click()
    //section 3
    await expect(page.locator("//h2[normalize-space()='Section 3: Checkboxes & Radio Buttons']")).toBeVisible()
    //if checked , uncheck all the options
    await page.locator("//input[@id='select-all']").uncheck()
    //check option a
    await page.locator("//input[@id='check-a']").check()
    //option c
    await page.locator("//input[@id='check-c']").check()
    // select all
    await page.locator("//input[@id='select-all']").check()
    //uncheck all
    await page.locator("//input[@id='select-all']").uncheck()

    //radio is not selected
    await expect(page.locator("//p[@data-testid='radio-result']")).toBeVisible()
    //choce 1
    await page.locator("//input[@id='radio-1']").check()
    // check to see hidden text
    await page.getByTestId("reveal-checkbox").check()
    //
    await expect(page.locator("//p[normalize-space()='Hidden text is now visible!']")).toBeVisible()
})

test("dropdowns", async({page})=>{
 
    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //start parc button
    await page.locator("//a[contains(text(),'Start practising ↓')]").click()
    await page.locator("//main//li[4]//a[1]").click()
    //section 4
    await expect(page.locator("//h2[normalize-space()='Section 4: Dropdowns']")).toBeVisible()
    //selected none
    await expect(page.locator("//p[@data-testid='standard-select-result']")).toHaveText("Selected: none")
    //standard select
    await page.locator("//select[@id='standard-select']").selectOption("Red")
    // multi-select
    await page.locator("//select[@id='multi-select']").selectOption(["java", "python"])
    //cust
    const customDropdown = page.getByTestId("custom-dropdown-toggle").locator("..")
    await customDropdown.getByTestId("custom-dropdown-toggle").click()
    await customDropdown.getByTestId("custom-option-alpha").click()
    //dynamic
    await page.locator("//select[@id='dynamic-select']").selectOption("Playwright")
     

})

test("dynamic",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    // dynamic conte
    await page.locator("//span[normalize-space()='Dynamic Content']").click()
    await expect(page.locator("//h2[normalize-space()='Section 6: Dynamic Content']")).toBeVisible()
    //wait ele delay text
    //await expect.soft(page.locator("//p[normalize-space()='Waiting for delayed element...']")).toBeVisible()
    //after 2 sec new text appears
    await expect(page.locator("//*[text()='I appeared after 2 seconds']")).toBeVisible()
    //disapper button
    await page.getByRole("button",{name : 'Disappear button'}).click()
    //expect original text
    await expect(page.locator("//p[normalize-space()='Original text']")).toHaveText("Original text")
    //change text button appers
    await page.locator("//button[@id='change-text-btn']").click()
    //text changes
    await expect(page.locator("//*[text()='Text has changed!']")).toBeVisible()
    //inc button
    const clickCount = 5 // Set this to 5, 6, or 10 as required
    const incrementButton = page.getByRole("button", { name: "Increment counter" })
    for (let i = 0; i < clickCount; i++) {
        await incrementButton.click()
    }
    // counter result
    await page.locator("p[data-testid='counter-result']").count(5)
    //load content button
    await page.locator("//button[@id='load-content-btn']").click()
})

test("alerts",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //select alerts//to handle alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("This is a practice alert")
        await dialog.accept()
    })

    await page.click("a[href='#section-9']")

})

test("confirm",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //select alerts//to handle alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Do you confirm this action?")
        await dialog.accept() // close dialog by pressing OK
        //await dialog.dismiss()// close dialog by pressing cancle
    })

    await page.click("//button[@id='confirm-btn']")
    //ok expect
    //await expect(page.locator("//p[normalize-space()='Confirm result: OK']")).toHaveText("Confirm result: OK")
    //cancle expect
    await expect(page.locator("//p[normalize-space()='Confirm result: OK']")).toHaveText("Confirm result: OK")
})

test("prompt",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //select alerts//to handle alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("Enter a value:")
        //any default valie in text box ,if u need to verify - use below code
        //expect(dialog.defaultValue()).toContain('enter value which is in placeholder')
        //await dialog.accept('testing')//enter value in () that need to be entered in text box
        await dialog.dismiss()
    })

    await page.click("//button[@id='prompt-btn']")
    //ok expect
    //await expect(page.locator("p[data-testid='alert-result']")).toHaveText("Prompt value: testing")
    //cancle expect
    await expect(page.locator("p[data-testid='alert-result']")).toHaveText("Prompt value: (cancelled)")
})

test("modals", async ({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //section 10
    await expect(page.locator("//h2[normalize-space()='Section 10: Modals']")).toBeVisible()
    //click on open module button
    await page.click("//button[@id='open-modal-btn']")
    //expect
    await expect(page.locator("//h3[normalize-space()='Practice Modal']")).toBeVisible()
    //click on close button
    await page.click("//button[@id='modal-close-btn']")
    //click on open module button again
    await page.click("//button[@id='open-modal-btn']")
    //click cross button
    await page.click("//button[@id='modal-x']")

})

test("iframes", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //section 11
    await page.click("a[href='#section-11']")
    await expect(page.locator("//h2[normalize-space()='Section 11: iFrame']")).toBeVisible()
    const iframe = page.frameLocator("iframe[title='practice-iframe']")
    await iframe.locator("#iframe-input").fill("testing")
    await iframe.locator("#iframe-btn").click()
    await expect(iframe.locator("#iframe-result")).toHaveText("Iframe button clicked: testing")

    

})
test("shadow dom", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //sec 12
    await page.click("//span[normalize-space()='Shadow DOM']")
    //for shadow dom we cannot use xpath so we need to use css to locate element
    await page.fill("#shadow-input","testing")
    await page.click("#shadow-btn")


})

test("drag and drop",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    await expect(page.locator("//span[normalize-space()='Drag & Drop']")).toBeVisible()
    const source = page.locator("//div[@id='drag-source']")
    const des= page.locator("//div[@id='drop-zone']")
    await source.dragTo(des)
})

test("hover and tool tip", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //hover mr
    await page.locator("//button[@id='hover-menu-trigger']").hover()
    //info on mouse tool tip
    await page.locator("//span[@id='tooltip-trigger']").hover()

})

test("file upload",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //file
    await page.locator("//span[normalize-space()='File Upload']").click()
    await page.locator("//input[@id='file-upload']").setInputFiles(
        path.resolve(process.cwd(), "tests", "Ranjith_QA_latest_v2.pdf")
    )
    await expect(page.locator("//*[text()='Ranjith_QA_latest_v2.pdf']")).toHaveText("Ranjith_QA_latest_v2.pdf")
})

test("download",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //click on download 
    await page.click("//span[normalize-space()='Download']")
    await page.click("//button[@id='download-btn']")
    //asert
    await expect(page.locator("//p[normalize-space()='Download triggered: practice.txt']")).toHaveText("Download triggered: practice.txt")
    
})

test("hidden element",async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1")
    //click on download 
    await page.click("//span[normalize-space()='Hidden Elements']")
    await page.click("//button[@id='reveal-btn']")
    //asert
    await expect(page.locator("//p[normalize-space()='Previously hidden element is now visible!']")).toHaveText("Previously hidden element is now visible!")
    
    
})

test("tab switch", async ({ page }) => {

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1");

    // Click Multiple Windows
    await page.click("//span[normalize-space()='Multiple Windows']");

    // Open and capture the new tab
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("//button[@id='open-window-btn']")
    ]);

    // Verify the new tab
    await newPage.waitForLoadState();

    // Return to the original tab
    await page.bringToFront();

    // Assert on the original page
    await expect(
        page.locator("//p[normalize-space()='New window/tab opened']")
    ).toHaveText("New window/tab opened");

});

test("auth simulator1,valid id and pass", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1");
    //sec 21
    await page.locator("//span[normalize-space()='Authentication Simulation']").click()
    //uname
    await page.getByPlaceholder("Username").fill("admin")
    //pass
    await page.getByTestId("auth-password").fill("admin123")
    //login
    await page.getByRole("button",{name : "Login"}).click()
    //
    await expect(page.locator("//p[normalize-space()='Dashboard: login successful']")).toBeVisible()
})

test("auth simulator2,Invalid id and pass", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1");
    //sec 21
    await page.locator("//span[normalize-space()='Authentication Simulation']").click()
    //uname
    await page.getByPlaceholder("Username").fill("adminn")
    //pass
    await page.getByTestId("auth-password").fill("admin123")
    //login
    await page.getByRole("button",{name : "Login"}).click()
    //
    await expect(page.locator("//*[text()='Invalid credentials']")).toBeVisible()
})

test("auth simulator3,valid id and inpass", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1");
    //sec 21
    await page.locator("//span[normalize-space()='Authentication Simulation']").click()
    //uname
    await page.getByPlaceholder("Username").fill("admin")
    //pass
    await page.getByTestId("auth-password").fill("admin1234")
    //login
    await page.getByRole("button",{name : "Login"}).click()
    //
    await expect(page.locator("//*[text()='Invalid credentials']")).toBeVisible()
})

test("auth simulator4,blank id and password", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1");
    //sec 21
    await page.locator("//span[normalize-space()='Authentication Simulation']").click()
    //uname
    await page.getByPlaceholder("Username").fill(" ")
    //pass
    await page.getByTestId("auth-password").fill(" ")
    //login
    await page.getByRole("button",{name : "Login"}).click()
    //
    await expect(page.locator("//*[text()='Invalid credentials']")).toBeVisible()
})

test("stale", async({page})=>{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice?fbclid=PAT01DUAVJIWtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp7KAZfabzOWLi96ZFkmRw5lg6fv_gYD0cX_uKErD3z_BEKjfNLUVaad_HwqA_aem_GZu5Z8gyiObWr5vGpJmdQg#section-1");

    await page.click("//span[normalize-space()='Stale Element Simulation']")
    //
    await expect(page.locator("//h2[normalize-space()='Section 22: Stale Element Simulation']")).toBeVisible()
    var stl = 10;
    const rbutton = page.locator("//button[@id='stale-refresh-btn']")
    for(let i=0;i<stl;i++){
        rbutton.click()
    }
    await expect(page.locator("//p[@id='stale-target']")).toHaveText("Stale target instance #10")
})
