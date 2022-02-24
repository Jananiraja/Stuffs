import playwright, { Browser, Page, devices, ChromiumBrowserContext } from 'playwright';
import { login } from './page_objects';
import { World } from 'cucumber';

export class Application {
    public Lpage : login

    constructor() {
        
        this.Lpage = new login()
        console.log("Login cons");
    }
}



export interface CustomWorld extends World {
    Application?: Application;
  }