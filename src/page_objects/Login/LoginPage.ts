import playwright, { Browser, Page, devices, ChromiumBrowserContext, chromium } from 'playwright';
import { PlaywrightTestConfig } from '@playwright/test';
import * as path from 'path';
import { CustomWorld } from '../../main.driver';


export class login {
    
    async LoginTo(screen:CustomWorld) {
        console.log("In LoginTo Method");
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://www.shopping.com/');
        await browser.close();
    }
}
