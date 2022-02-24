import { Browser, Page, devices, ChromiumBrowserContext, chromium } from 'playwright';
import { Given, When, Then} from "cucumber";
import { World } from 'cucumber';
import * as Testdata from '../../testdata/testdata.json'
import {Application, CustomWorld} from '../main.driver';
import { login } from '../page_objects';


Given("I navigate to google url", async function (this:CustomWorld) {
    console.log("Navigate to google");
    //await this.Application?.Lpage.LoginTo(this)
        console.log("In LoginTo Method");
        let headlessmode = JSON.parse(Testdata.common.Project.BrowserProp.Headless);
        const browser = await chromium.launch({
            headless: headlessmode,
            args:['--start-maximized', '--disable-popup-blocking']});
        const page = await browser.newPage();
        await page.goto('https://www.shopping.com/');
        await browser.close();
});

Then("I land onto google page", async function (this:CustomWorld) {
    console.log("land onto google page"); 
});

Then("I search in google", async function (this:CustomWorld) {
    console.log("search in google");
});

